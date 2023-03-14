import React, { useEffect, useState } from "react";
import Chart from "../chart/Chart";
import axios from "axios";
import { Button } from "@mui/material";
import DropdownSmart from "../Dropdown/DropdownSmart";
import Featured from "../featured/Featured";
import "./CommodityDDC.scss"
import Insights from "../Insights/Insights"

const CommodityDDC = () => {
  const [stateName, setStateName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [marketName, setMarketName] = useState("");
  const [commodityName, setCommodityName] = useState("");
  const [varietyName, setVarietyName] = useState("");
  const url = `http://localhost:8080/api/getCommodity/`;
  const [data, setData] = useState({
    commodityName:"",
    trend:[]
  });
  const [viewGraphToggle, setViewGraphToggle] = useState(false);
  const [insights,setInsights]=useState({
    low:0,
    high:0,
    price:0
  });
  const days_arr= [1,3,5,7,30,90,365];


  useEffect(() => {
    setDistrictName("");
    setMarketName("");
    setCommodityName("");
    setVarietyName("");
    // console.log("sta")
  }, [stateName]);
  useEffect(() => {
    setMarketName("");
    setCommodityName("");
    setVarietyName("");
    // console.log("did")
  }, [districtName]);
  useEffect(() => {
    setCommodityName("");
    setVarietyName("");
    // console.log("mar")
  }, [marketName]);
  useEffect(() => {
    setVarietyName("");
    // console.log("comm")
  }, [commodityName]);
  useEffect(() => {
    if (varietyName !== "") {
      submitButton();
    } 
    // console.log("var out")
  }, [varietyName,viewGraphToggle]);

  const submitButton = () => {
    axios
      .get(
        url +
          `${stateName}/${districtName}/${marketName}/${commodityName}/${varietyName}`
      )
      .then((res) => {
        const priceList=res.data.modal_price;
        let priceInd=priceList.length -1;
        if(priceInd>=0){
          setInsights({
            price:priceList[priceInd].price,
            low:priceList[priceInd].min_price,
            high:priceList[priceInd].max_price,
          })
        }
        const newlist = [];
        // priceList.map((it) => {
        //   newlist.push({
        //     id: it.id,
        //     date: String(it.date).substring(0, 10),
        //     price: it.price,
        //     max_price: it.max_price,
        //     min_price: it.min_price,
        //   });
        // });
        priceList.map((it) => {
          newlist.push({
            id: it.id,
            date: (it.id).substr((it.id).length-10,10),
            price: it.price,
            max_price: it.max_price,
            min_price: it.min_price,
          });
        });
        console.log(newlist)
        setData({
          commodityName:`Commodity : ${res.data.commodity} Variety : ${res.data.variety}`,
          trend:newlist
        });
        setViewGraphToggle(true);
      })
      .catch((error) => {
        console.log(`Error :- ${error}`);
      });
  };
  return (
    <div className="CommodityDDC">

      <h1>Select the relevent options for geting the insights of a commodity.</h1>
      <DropdownSmart 
        dataType="getStates"
        name=""
        DropdownSmartToParent={setStateName}
        header="State"
      />
      {stateName !== "" ? (
        <DropdownSmart
          dataType="getDistricts"
          name={`${stateName}`}
          DropdownSmartToParent={setDistrictName}
          header="District"
        />
      ) : (
        <div></div>
      )}
      {districtName !== "" ? (
        <DropdownSmart
          dataType="getMarkets"
          name={`${stateName}/${districtName}`}
          DropdownSmartToParent={setMarketName}
          header="Market"
        />
      ) : (
        <div className="drop"></div>
      )}
      {marketName !== "" ? (
        <DropdownSmart
          dataType="getCommodities"
          name={`${stateName}/${districtName}/${marketName}`}
          DropdownSmartToParent={setCommodityName}
          header="Commodity"
        />
      ) : (
        <div className="drop"></div>
      )}
      {commodityName !== "" ? (
        <>
        <DropdownSmart
          dataType="getVarieties"
          name={`${stateName}/${districtName}/${marketName}/${commodityName}`}
          DropdownSmartToParent={setVarietyName}
          header="Variety"
        />
        </>
      ) : (
        <div></div>
      )}
      <Button
        style={{
          display: "none",
        }}
        label="Submit"
        onClick={submitButton}
      >
        {" "}
        Submit
      </Button>
      {(viewGraphToggle===true) ? (
        <div>
          <Chart data={data} graphName={commodityName} aspect={2/1}/>
          <Featured insights={insights}/>
          <div className = "insight-body"> {days_arr.map((i)=>{return( <Insights className = "child" id={`${stateName}${districtName}${marketName}${commodityName}${varietyName}`}  days={i}/>);})}</div>
        </div>
      ) : (
        <div></div>
      )}
      
    </div>
  );
};
export default CommodityDDC;

import React, { useEffect, useState } from "react";
import BuildGraph from "../Graph/BuildGraph";
import axios from "axios";
import { Button } from "@mui/material";
import DropdownSmart from "../Dropdown/DropdownSmart";
const Home = () => {
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
      // console.log("var in")
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
        const newlist = [];
        res.data.modal_price.map((it) => {
          newlist.push({
            id: it.id,
            date: String(it.date).substring(0, 10),
            price: it.price,
            max_price: it.max_price,
            min_price: it.min_price,
          });
        });
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
    <div className="">
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
        <div></div>
      )}
      {marketName !== "" ? (
        <DropdownSmart
          dataType="getCommodities"
          name={`${stateName}/${districtName}/${marketName}`}
          DropdownSmartToParent={setCommodityName}
          header="Commodity"
        />
      ) : (
        <div></div>
      )}
      {commodityName !== "" ? (
        <DropdownSmart
          dataType="getVarieties"
          name={`${stateName}/${districtName}/${marketName}/${commodityName}`}
          DropdownSmartToParent={setVarietyName}
          header="Variety"
        />
      ) : (
        <div></div>
      )}
      <Button
        style={{
          background: "#333",
          color: "#FFFFFF",
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
          <BuildGraph data={data} graphName={commodityName}/>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Home;

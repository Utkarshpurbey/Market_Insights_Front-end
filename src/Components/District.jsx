import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Cards"
const District = ()=>{
    const param = useParams();
    const url = `http://localhost:8080/api/getCommodity/${param.StateName}/${param.District}`
    
    const [data,setData] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData=()=>{
        axios.get(url).then((res)=>{
            const all_response = res.data;
            setData(all_response)
        }).catch((error)=>{
            console.log(`Error :- ${error}`);
        })
    }



    return (
        <div>
        <h1>See the console to see the data of State {param.StateName} and of District {param.District}
        </h1>
        <div className="card-box">           
        {data.map((result) => (
            <Cards key={result.id} state={result.state} market={result.market} commodity={result.commodity}>

            </Cards> 
        ))};
        
        </div>
        </div>
    );
};

export default District;
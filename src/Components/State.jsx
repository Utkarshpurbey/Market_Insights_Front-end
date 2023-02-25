import React, { useEffect }from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const State = () =>{
    const param = useParams();
    useEffect(()=>{
        document.title = "State data";
        axios.get(`http://localhost:8080/state/${param.StateName}`).then((response)=>{
        console.log(response.data.records)
        }).catch((expection)=>{
            console.log(expection);
        })
    },[]);
    return (
         <h1>Hello World</h1>
    );
};
export default State;
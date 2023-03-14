import React, { useEffect, useState } from "react";
import axios from "axios";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./insights.scss"

const Insights = ({id,days}) =>{
    const[data,SetData] = useState([]);
    const [curprice,setCurrprice] = useState(0);
    const [average ,setAverage] = useState(0);
    const [lastPrice,setLastPrice] = useState(0);

    const max_min = ()=>{
        axios.get(`http://localhost:8080/insights/max_min/${id}/${days}`).
        then((res)=>{
            SetData(res.data);
            console.log(res.data)
        }).catch((err)=>{
            console.log(`Error - ${err}`)
        })
        
    }

    const current_price = ()=>{
        axios.get(`http://localhost:8080/api/getCommodityById/${id}`).then((res)=>{
            setCurrprice(res.data.modal_price[res.data.modal_price.length-1].price) 
            setLastPrice(res.data.modal_price[res.data.modal_price.length-2].price)
        }).catch((err)=>{
            console.log(`Error - ${err}`)
        })
    }

    const average_price = () =>{
        axios.get(`http://localhost:8080/insights/average/${id}/${days}`).then((res)=>{
        setAverage(res.data);
        }).catch((err)=>{
            console.log(`Error - ${err}`)
        })
    }

    const progress_bar = () =>{
        if(prog_val>0){
            return  <ProgressBar variant="success"  now = {prog_val}  />
        }else{
            return <ProgressBar variant="danger" now = {Math.abs(prog_val)} />
        }
    }

    const percent_h1 = ()=>{
        if(percent>0){
            return( <h1 style={{color:"green",fontWeight:400}}>
                <ArrowDropUpIcon fontSize="large" /> {percent.toFixed(2)}%</h1>);
        }
        else{
              return( <h1 style={{color:"red",fontWeight:400}}>
                <ArrowDropDownIcon fontSize="large" /> {percent.toFixed(2)}%</h1>);
        }
    }
    const ChangesOverDay = ()=>{
        if(days == 1){
            return <p>Over the Past day</p>
        }else if(days == 7){
            return <p>Over the Week</p>

        }else if(days%30 ==0 ){
            return <p>Over the {days/30} months</p>
        }else if(days == 365){
            return <p>Over the Year</p>
        }
        else{
            return <p>Over the Past {days} days </p>
        }
    }

    useEffect(()=>{
        max_min()
        current_price()
        average_price();
    },[id]);

    var max_val = data[0];
    var min_val = data[1];
    var percent = (days == 1 ? (((curprice-lastPrice)/curprice)*100):((curprice-average)/curprice)*100);
    var prog_val = (curprice-min_val)/(max_val-min_val)*100;
    
    return (
        <div className="insight-card">
            {percent_h1()}
            <div className="insight-text">{ChangesOverDay()}</div>
            {/* <p>Max val = {max_val} Min val = {min_val} Current Price = {curprice}  average = {average}  Percent ={percent} prog_val = {prog_val} </p> */}
            <p className="min">{min_val}</p>
            <p className="max"> {max_val} </p>
            {progress_bar()}
        </div>

    );

}

export default Insights;
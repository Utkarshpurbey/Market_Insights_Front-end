import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLastD, getMinD,getMaxD,getAvgD, Currprice } from "./insight_calls";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 
import ProgressBar from 'react-bootstrap/ProgressBar';
import './insights.scss'
const DayWiseInsight = ({days})=>{
    const region = useSelector((state)=>state.region);
    const [min,setMin] = useState(0);
    const [max,setMax] = useState(0);
    const [avg,setAvg] = useState(0);
    const [curr,setCurr] = useState(0);
    useEffect(()=>{
        Currprice(region).then((res)=>{if(res.price.length>0){setCurr(res.price[0])}})
        getMinD(region,days).then((res)=>{if(res.length>0){ setMin(res[0].minPrice)}}).catch((err)=>console.log(err))
        getMaxD(region,days).then((res)=>{if(res.length>0){setMax(res[0].maxPrice)}}).catch((err)=>console.log(err))
         getAvgD(region,days).then((res)=>{if(res.length>0){setAvg(res[0].average)}}).catch((err)=>console.log(err))
    },[days])

    const ChangesOverDay = ()=>{
      if(days === 1){
          return <p>Over the Past day</p>
      }else if(days === 7){
          return <p>Over the Week</p>

      }else if(days%30 ===0 ){
          if(days == 30){
              return <p>Over the 1 month</p>
          }else{return <p>Over the {days/30} months</p>}
      }else if(days === 365){
          return <p>Over the Year</p>
      }
      else{
          return <p>Over the Past {days} days </p>
      }
  }
  const percent_h1 = (percent)=>{
   if(percent === null){
      return( <h1 style={{color:"grey",fontWeight:400}}>
      NA</h1>);
   }
   else if(percent>0){
       return( <h1 style={{color:"green",fontWeight:400}}>
           <ArrowDropUpIcon fontSize="large" /> {percent.toFixed(2)}%</h1>);
   }
   else{
         return( <h1 style={{color:"red",fontWeight:400}}>
           <ArrowDropDownIcon fontSize="large" /> {percent.toFixed(2)}%</h1>);
   }
}
const progress_bar = (prog_val) =>{
   if(prog_val>0){
       return  <ProgressBar variant="success"  now = {prog_val}  />
   }else{
       return <ProgressBar variant="danger" now = {Math.abs(prog_val)} />
   }
}

const insight_box = ()=>{
   var percent = null;
   var prog_val  = (curr-min)/(max-min)*100;
   if(avg  && min && max ) {
      percent = ((curr-avg)/curr)*100;
   }

   return (<div className="insight-card">
   {percent_h1(percent)}
   <div className="insight-text">{ChangesOverDay()}</div>
   {/* <p>Max val = {max_val} Min val = {min_val} Current Price = {curprice}  average = {average}  Percent ={percent} prog_val = {prog_val} lastPrice = {lastPrice}</p> */}
   <p className="min">{min}</p>
   <p className="max"> {max} </p>
   {progress_bar(prog_val)}
   </div>);
}

    return(
       curr ? (<>
         {insight_box()}
       </>):<h1>Insight Loading ..</h1>
    );
}
export default DayWiseInsight;
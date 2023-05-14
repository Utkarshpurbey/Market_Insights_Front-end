import { Button } from "@mui/material";
import { useContext,useEffect,useState } from "react";
import { useSelector } from "react-redux";
import {data} from "../../pages/commodities/ProductList"
import Chart from "../new_chart/Chart";
import { getAll,getAvgD,getMinD} from "./insight_calls";
const Insight = () =>{
    const [toggle,setToggle] = useContext(data);
    const region = useSelector((state)=>state.region);
    const [details,setDetails] = useState(null);
    useEffect(()=>{ 
        getAll(region).then((data)=>setDetails(data))

    },[])
    return(
        <>
        <Button onClick={()=>setToggle(false)}>Go Back</Button>
        {
         details ? <Chart data = {details}/> :<h1>Loading Insights...</h1>
        }
       
        </>
    );
}
 export default Insight;
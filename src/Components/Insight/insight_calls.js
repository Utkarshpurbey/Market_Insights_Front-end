import axios from "axios";

const getDdaysBackDate = (days = 0)=>{
    var today = new Date();
    today.setDate(today.getDate()-days);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today =  yyyy + '-' +mm + '-'+ dd;
    return today;
}
export const getLastD = async (obj,days)=>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/getLastD?state=${obj.stateName}&district=${obj.districtName}&market=${obj.marketName}&commodity=${obj.commodityName}&variety=${obj.varietyName}&days=${days}`)
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error)
    }
}


export const getAll= async(obj)=>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/getAll?state=${obj.stateName}&district=${obj.districtName}&market=${obj.marketName}&commodity=${obj.commodityName}&variety=${obj.varietyName}`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log('Error',error)
    }

}
export const getMinD = async(obj,days) =>{
    try {
        let today = getDdaysBackDate();
        let DdaysBack = getDdaysBackDate(days);
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/getMinInterval?startDate=${DdaysBack}&endDate=${today}&state=${obj.stateName}&district=${obj.districtName}&market=${obj.marketName}&commodity=${obj.commodityName}&variety=${obj.varietyName}`)
        const data = await response.data;
        return data;
    } catch (error) {
        console.log('Error - ',error)
        
    }
}
export const getMaxD = async(obj,days) =>{
    try {
        let today = getDdaysBackDate();
        let DdaysBack = getDdaysBackDate(days);
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/getMaxInterval?startDate=${DdaysBack}&endDate=${today}&state=${obj.stateName}&district=${obj.districtName}&market=${obj.marketName}&commodity=${obj.commodityName}&variety=${obj.varietyName}`)
        const data = await response.data;
        return data;
    } catch (error) {
        console.log('Error - ',error)
        
    }
}
export const getAvgD = async(obj,days) =>{
    try {
        let today = getDdaysBackDate();
        let DdaysBack = getDdaysBackDate(days);
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/getAvgInterval?startDate=${DdaysBack}&endDate=${today}&state=${obj.stateName}&district=${obj.districtName}&market=${obj.marketName}&commodity=${obj.commodityName}&variety=${obj.varietyName}`)
        const data = await response.data;
        return data;
    } catch (error) {
        console.log('Error - ',error)
        
    }
}

export const Currprice = async(obj)=>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/getLast?state=${obj.stateName}&district=${obj.districtName}&market=${obj.marketName}&commodity=${obj.commodityName}&variety=${obj.varietyName}`)
        const data = await response.data;
        return data;
        
    } catch (error) {
        console.log(error)
    }
}
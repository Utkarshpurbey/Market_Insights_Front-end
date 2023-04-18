import { createSlice } from '@reduxjs/toolkit';


const regionSlice = createSlice({
    name: 'region',
    initialState: {
        initialLoading:true,
        stateName: localStorage.getItem('stateName')?localStorage.getItem('stateName'):'',
        districtName: localStorage.getItem('districtName')?localStorage.getItem('districtName'):'',
        marketName: localStorage.getItem('marketName')?localStorage.getItem('marketName'):'',
        commodityName: localStorage.getItem('commodityName')?localStorage.getItem('commodityName'):'',
        varietyName: localStorage.getItem('varietyName')?localStorage.getItem('varietyName'):''
    },
    reducers: {
        setStateName(state, action) {
            localStorage.clear();
            localStorage.setItem('stateName',action.payload);
            state.stateName = action.payload;
            state.initialLoading=false
        },
        setDistrictName(state, action) {
            localStorage.setItem('districtName',action.payload)
            state.districtName = action.payload
        },
        setMarketName(state, action) {
            localStorage.setItem('marketName',action.payload)
            state.marketName = action.payload
        },
        setCommodityName(state, action) {
            localStorage.setItem('commodityName',action.payload)
            state.commodityName = action.payload
        },
        setVarietyName(state, action) {
            localStorage.setItem('varietyName',action.payload)
            state.varietyName = action.payload
        },
    },
});



export const regionActions = regionSlice.actions;

export default regionSlice;
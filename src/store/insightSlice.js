 import { createSlice } from "@reduxjs/toolkit";
const insightSlice = createSlice(
    {
        name: 'insightSlice',
        initialState:{
            instant:[],
            stateName: localStorage.getItem('stateName')?localStorage.getItem('stateName'):'',
            districtName: localStorage.getItem('districtName')?localStorage.getItem('districtName'):'',
            marketName: localStorage.getItem('marketName')?localStorage.getItem('marketName'):'',
            commodityName: localStorage.getItem('commodityName')?localStorage.getItem('commodityName'):'',
            varietyName: localStorage.getItem('varietyName')?localStorage.getItem('varietyName'):'',
            min_price : [],
            max_price :[],
            price:[]
        },
        reducers:{
            updateInfo(state,action){
                state.instant = action.payload.instant;
                state.stateName = action.payload.state;
                state.districtName = action.payload.district;
                state.commodityName = action.payload.commodity;
                state.varietyName = action.payload.variety;
                const list1 = [];
                for(let i =0;i<action.payload.min_price.length;i++){
                    list1.push(action.payload.min_price[i])
                }
                const list2 = [];
                for(let i =0;i<action.payload.max_price.length;i++){
                    list2.push(action.payload.max_price[i])
                }
                const list3 = [];
                for(let i =0;i<action.payload.price.length;i++){
                    list3.push(action.payload.price[i])
                }
                state.min_price = list1;
                state.max_price = list2;
                state.price = list3;
            }

        }

    }
);
export const getCommodityList = () => {
    return async (dispatch) => {
        const getRequest = async () => {
            const stateName=localStorage.getItem('stateName');
            const districtName=localStorage.getItem('districtName');
            const response = await fetch(
                `${process.env.REACT_APP_URL}/api/getAllCommodities?state=${stateName}&district=${districtName}`);
            if (!response.ok) {
                throw new Error('Getting weather data failed.');
            }
            return await response.json()
        };

        try {
            const response = await getRequest();
            dispatch(
                commodityListActions.updateList(response)
            );
            // return response;

            // console.log(response)
        } catch (error) {
            console.log(error)
        }
    };
};
import { createSlice } from '@reduxjs/toolkit';


const commodityListSlice = createSlice({
    name: 'commodityList',
    initialState: {
        dataLoading: true,
        commodities: [],
    },
    reducers: {
        updateList(state, action) {
            const list =[]
            for (let i = 0; i < action.payload.length; i++) {
                list.push(action.payload[i]);
            }
            state.commodities=list;
            state.dataLoading = false;
        },
    },
});

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


export const commodityListActions = commodityListSlice.actions;

export default commodityListSlice;
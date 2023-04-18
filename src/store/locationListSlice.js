import { createSlice } from '@reduxjs/toolkit';


const locationListSlice = createSlice({
    name: 'locationList',
    initialState: {
        dataLoading: true,
        states: [],
        districts: [],
        markets: [],
        commodities: [],
        varieties: []
    },
    reducers: {
        updateState(state, action) {
            const list =[]
            for (let i = 0; i < action.payload.length; i++) {
                list.push(action.payload[i].state);
            }
            list.sort()
            state.states=list;
            state.dataLoading = false;
        },
        updateDistricts(state, action) {
            const list =[]
            for (let i = 0; i < action.payload.length; i++) {
                list.push(action.payload[i].id);
            }
            list.sort()
            state.districts=list;
        },
        updateMarkets(state, action) {
            const list=[];
            for (let i = 0; i < action.payload.length; i++) {
                list.push(action.payload[i].id);
            }
            list.sort()
            state.markets=list;
        },
        updateCommodities(state, action) {
            const list=[];
            for (let i = 0; i < action.payload.length; i++) {
                list.push(action.payload[i].id);
            }
            list.sort()
            state.commodities=list;
        },
        updateVarieties(state, action) {
            const list=[];
            for (let i = 0; i < action.payload.length; i++) {
                state.varieties.push(action.payload[i].id);
            }
            list.sort()
            state.varieties=list;
        }

    },
});

export const getStates = () => {
    return async (dispatch) => {
        const getRequest = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_URL}/api/getAllStates`);

            if (!response.ok) {
                throw new Error('Getting weather data failed.');
            }
            return await response.json()
        };

        try {
            const response = await getRequest();
            dispatch(
                locationListActions.updateState(response)
            );
            // return response;

            // console.log(response)
        } catch (error) {
            console.log(error)
        }
    };
};

export const getDistricts = () => {
    return async (dispatch) => {
        const getRequest = async () => {
            const stateName=localStorage.getItem('stateName');
            // console.log(stateName)
            const response = await fetch(
                `${process.env.REACT_APP_URL}/api/getDistricts?state=${stateName}`);

            if (!response.ok) {
                throw new Error(`Getting ${stateName} data failed.`);
            }
            return await response.json()
        };

        try {
            const response = await getRequest();
            dispatch(
                locationListActions.updateDistricts(response)
            );
            // return response;

            // console.log(response)
        } catch (error) {
            console.log(error)
        }
    };
};




export const locationListActions = locationListSlice.actions;

export default locationListSlice;
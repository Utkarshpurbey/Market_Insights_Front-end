import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    dataLoading:true,
    location:{
        name: "",
        region: '',
        country: '',
        lat: 0,
        lon: 0,
        tz_id: '',
        localtime: ""
    },
    current:{
        temp_c: 0,
        temp_f: 32,
        is_day: 1,
        wind_mph: 0,
        wind_kph: 0,
        wind_degree: 0,
        wind_dir: "",
        pressure_mb: 0,
        pressure_in: 0,
        precip_mm: 0,
        precip_in: 0,
        humidity: 0,
        cloud: 0,
        feelslike_c: 0,
        feelslike_f: 0,
        vis_km: 0,
        vis_miles: 0,
        uv: 0,
        gust_mph: 0,
        gust_kph: 0,
        condition: {
            text: "",
            icon: ""
        }
    }

  },
  reducers: {
    setWeatherData(state, action) {
      state.current=action.payload.current
      state.location=action.payload.location
      state.dataLoading=false
    },
  },
});

export const getWeatherData = (region) => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/weather/realtime?region=${region}`);

      if (!response.ok) {
        throw new Error('Getting weather data failed.');
      }
      return await response.json()
    };

    try {
      const response=await getRequest();
      dispatch(
        weatherActions.setWeatherData(response)
      );
      // return response;

      // console.log(response)
    } catch (error) {
        console.log(error)
    }
  };
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice;
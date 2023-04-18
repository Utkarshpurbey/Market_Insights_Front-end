import { configureStore } from '@reduxjs/toolkit';
import regionSlice from './regionSlice';
import weatherSlice from './weatherSlice';
import locationListSlice from './locationListSlice'
import commodityListSlice from './commodityListSlice'

const metaStore = configureStore({
  reducer: {
    region:regionSlice.reducer,
    weather:weatherSlice.reducer,
    locationList:locationListSlice.reducer,
    commodityList:commodityListSlice.reducer
  },
});

export default metaStore;
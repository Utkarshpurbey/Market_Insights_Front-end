import React from "react";
import { Routes, Route } from "react-router-dom"
import State from "./State";
import District from './District'

const App = () =>{

    return(
        <Routes>
            <Route path='/:StateName' element ={ <State /> } />
            <Route path ='/:StateName/:District' element = {<District />}></Route>
        </Routes>
    );

};
export default App;
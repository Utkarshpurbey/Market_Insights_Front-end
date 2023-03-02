import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
const App = () =>{
    const url = `http://localhost:8080/api/getDistricts/Kerala`;
    return(
        <Routes>
            <Route path ='/' element={<Home/>} />
        </Routes>
    );

};
export default App;
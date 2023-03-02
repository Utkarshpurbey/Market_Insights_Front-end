// import React, { Component, Fragment, useState,useEffect } from "react";
// import { AppBar, Button, TextField, Toolbar, Typography } from "@mui/material";
// import Graph from "./Graph";
// import axios from "axios";
// import DropdownList from "../Dropdown/DropdownList"
// import "../index.css"
// const DetailForm = () => {
//   const [inputField, setInputField] = useState({
//     state: "",
//     district: "",
//     market: "",
//     commodity: "",
//     variety: "",
//   });
//   const [plot,setPlot]=useState("price");
//   const [data, setData] = useState([]);
//   const [submitFlag, setSubmitFlag] = useState(false)
//   const url = `http://localhost:8080/api/getCommodity/`;
//   const inputsHandler = (e) => {
//     e.preventDefault();
//     setInputField({ ...inputField, [e.target.name]: e.target.value });
//   };

//   const submitButton = () => {
//     axios
//       .get(
//         url +
//           `${inputField.state}/${inputField.district}/${inputField.market}/${inputField.commodity}/${inputField.variety}`
//       )
//       .then((res) => {
//         setData(res.data.modal_price);
//         setSubmitFlag(true);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(`Error :- ${error}`);
//       });
//   };


//   return (

//     <div className="form">
//       <AppBar style={{ background: "#333" }} position="sticky">
//         <Toolbar title="Commodity">
//           <Typography color="inherit" variant="title">
//             Form
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <br />
//       <TextField
//         label="State"
//         name="state"
//         onChange={inputsHandler}
//         defaultValue={inputField.state}
//       />
//       <br />
//       <br />
//       <br />
//       <br />
//       <TextField
//         label="District"
//         name="district"
//         onChange={inputsHandler}
//         defaultValue={inputField.district}
//       />
//       <br />
//       <br />
//       <br />
//       <br />
//       <TextField
//         label="Market"
//         name="market"
//         onChange={inputsHandler}
//         defaultValue={inputField.market}
//       />
//       <br />
//       <br />
//       <br />
//       <br />
//       <TextField
//         label="Commodity"
//         name="commodity"
//         onChange={inputsHandler}
//         defaultValue={inputField.commodity}
//       />
//       <br />
//       <br />
//       <br />
//       <br />
//       <TextField
//         label="Variety"
//         name="variety"
//         onChange={inputsHandler}
//         defaultValue={inputField.variety}
//       />
//       <br />
//       <br />
//       <br />
//       <Button
//         style={{
//           background: "#333",
//           color: "#FFFFFF",
//         }}
//         label="Submit"
//         onClick={submitButton}
//       >
//         {" "}
//         Submit
//       </Button>
//       {submitFlag && <Graph data={data}/>}
//     </div>
//   );
// };

// export default DetailForm;

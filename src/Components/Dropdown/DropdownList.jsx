import {useState } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const DropdownList = ({content,dropdownToParent,header}) => {
  const [data, setData] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setData(event.target.value);
    dropdownToParent(event.target.value);
  };

  return (
    <div className="dropdownList">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel style={{color: "gray"}} id="inputId">Select {header}</InputLabel>
          <Select
            id="demo-simple-select"
            labelId="inputId"
            value={data}
            label= {`Select ${header}`}
            onChange={handleChange}
            style={{color: "gray"}}
          >
            {content?.map((name) => {
              return <MenuItem style={{color: "gray"}} key ={name} value={name}>{name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default DropdownList;
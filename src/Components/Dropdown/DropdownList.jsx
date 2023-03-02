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
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="inputId">Select {header}</InputLabel>
          <Select
            id="demo-simple-select"
            labelId="inputId"
            value={data}
            label= {`Select ${header}`}
            onChange={handleChange}
          >
            {content?.map((name) => {
              return <MenuItem key ={name} value={name}>{name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default DropdownList;
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const DropdownList = (props) => {
  const [data, setData] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setData(event.target.value);
    props.dropdownToFormData(data);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="inputId">Select {props.typeName}</InputLabel>
          <Select
            id="demo-simple-select"
            labelId="inputId"
            value={data}
            label="Select Courses"
            onChange={handleChange}
          >
            {props.content?.map((name) => {
              return <MenuItem value={name}>{name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default DropdownList;
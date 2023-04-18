import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {regionActions} from '../../store/regionSlice'
import {getDistricts} from '../../store/locationListSlice'
const DropdownList = ({content,dropdownToParent,header,value}) => {
  const dispatch = useDispatch();
  const {states} =useSelector((state) => state.locationList);
  useEffect(() => {
    dispatch(getDistricts())
  }, [dispatch]);
  const handleChange = (event) => {
    event.preventDefault();
    if(states.includes(event.target.value)){
      dispatch(regionActions.setStateName(event.target.value));  
      dispatch(getDistricts())
    }
    else{
      dispatch(regionActions.setDistrictName(event.target.value));
    }

  };

  return (
    <div className="dropdownList">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel style={{color: "gray"}} id="inputId">Select {header}</InputLabel>
          <Select
            id="demo-simple-select"
            labelId="inputId"
            value={value}
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
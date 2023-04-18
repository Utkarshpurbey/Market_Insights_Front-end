import { Fragment, useEffect, useState } from "react";
import DropdownList from "../Dropdown/DropdownList";
import { useSelector, useDispatch } from "react-redux";
import { getStates } from "../../store/locationListSlice";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

let initialLoad = true;
function DropDown() {
  const dispatch = useDispatch();
  const { states } = useSelector((state) => state.locationList);
  const { districts } = useSelector((state) => state.locationList);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {stateName,districtName} = useSelector((state)=>state.region)
  useEffect(() => {
    if (initialLoad) {
      initialLoad = false;
      return;
    }
    dispatch(getStates());
  }, [dispatch]);

  return (
    <div>
      <Button onClick={handleOpen}>Select Region</Button>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          <DropdownList content={states} header="State" value={stateName}/>
          <DropdownList content={districts} header="District" value={districtName}/>
        </Box>
      </Modal>
    </div>
  );
}

export default DropDown;

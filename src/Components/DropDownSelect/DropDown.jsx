import { useEffect, useState } from "react";
import DropdownList from "../../pages/region/DropdownList";
import { useSelector, useDispatch } from "react-redux";
import { getStates } from "../../store/locationListSlice";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Current Region and Market
          </Typography>
            <List >
               <ListItem>
                  
                <ListItem>
                  <ListItemText
                    primary={localStorage.getItem("stateName")}
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={localStorage.getItem("districtName")}
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={localStorage.getItem("marketName")}
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={localStorage.getItem("commodityName")}
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
                <ListItemText
                    primary={localStorage.getItem("varietyName")}
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
           </List>
        </Grid>
        </Grid>
      <Button onClick={handleOpen}>Select/Change Region</Button>
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

import {useContext, useState} from "react";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from '@mui/material/IconButton';
import {regionActions} from '../../store/regionSlice'
import './ProductCard.scss'
import {data} from "../../pages/commodities/ProductList";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function Product(props) {
  const [toggle,setToggle] = useContext(data);
  const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const handleCardClick=()=>{
      setToggle(!toggle);
      dispatch(regionActions.setMarketName(props.market)); 
      dispatch(regionActions.setCommodityName(props.commodity)); 
      dispatch(regionActions.setVarietyName(props.variety)); 
    }
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="card">
      <CardActions disableSpacing >
        <div>{props.commodity}</div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <CardContent className="product" onClick={handleCardClick}>
        <div className="description">{props.variety}</div>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="product-info">
          <div className="details">
            <div className="detail">
              <span className="label">Insights:</span>
            </div>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
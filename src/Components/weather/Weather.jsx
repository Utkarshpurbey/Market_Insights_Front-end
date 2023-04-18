import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from '@mui/material/IconButton';
import {useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherData } from "../../store/weatherSlice";
import "./weather.scss";
let initialLoad = true;

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
const WeatherCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();
  const region = useSelector((state) => {
    if (state.region.districtName) return state.region.districtName;
    else {
      return state.region.stateName;
    }
  });
  const weather = useSelector((state) => state.weather);
  const {
    temp_c,
    is_day,
    wind_kph,
    wind_dir,
    pressure_in,
    precip_mm,
    humidity,
    cloud,
    feelslike_c,
    vis_km,
    uv,
    condition,
  } = weather.current;
  useEffect(() => {
    if (initialLoad) {
      initialLoad = false;
      return;
    }
    if (region) dispatch(getWeatherData(region));
    // console.log("weather")
  }, [region, dispatch]);

  return (
    <header className="weather-header">
      {!weather.dataLoading ? (
        <>
          <Card
            sx={{  display:'inline-flex'}}
          >
            <CardActions disableSpacing>
              <div>{region}</div>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <CardContent className="weather">
              <img src={`https:${condition.icon}`} alt={condition.text} />
              <div className="temperature">{temp_c}°C</div>
              <div className="description">{condition.text}</div>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent className="weather-info">
                <div className="details">
                  <div className="detail">
                    <span className="label">Feels like:</span> {feelslike_c}°C
                  </div>
                  <div className="detail">
                    <span className="label">Wind:</span> {wind_kph} km/h{" "}
                    {wind_dir}
                  </div>
                  <div className="detail">
                    <span className="label">Pressure:</span> {pressure_in} PSI
                  </div>
                  <div className="detail">
                    <span className="label">Precipitation:</span> {precip_mm} mm
                  </div>
                  <div className="detail">
                    <span className="label">Humidity:</span> {humidity}%
                  </div>
                  <div className="detail">
                    <span className="label">Cloudiness:</span> {cloud}%
                  </div>
                  <div className="detail">
                    <span className="label">Visibility:</span> {vis_km} km
                  </div>
                  <div className="detail">
                    <span className="label">UV Index:</span> {uv}
                  </div>
                  <div className="detail">
                    <span className="label">Now:</span> {is_day?"Day":"Night"}
                  </div>
                </div>
              </CardContent>
            </Collapse>
          </Card>
        </>
      ) : (
        <div>Loading weather data...</div>
      )}
    </header>
  );
};

export default WeatherCard;

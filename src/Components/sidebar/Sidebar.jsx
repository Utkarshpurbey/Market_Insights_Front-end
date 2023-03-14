import "./sidebar.scss";
import HomeIcon from '@mui/icons-material/Home';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <HomeIcon className="icon" />
              <span>Home</span>
            </li>
          </Link>

          <p className="title">Insights</p>
          <Link to="/drop" style={{ textDecoration: "none" }}>
            <li>
              <AnalyticsIcon className="icon" />
              <span>Insights Menu</span>
            </li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>
              <InfoRoundedIcon className="icon" />
              <span>About</span>
            </li>
          </Link>
          
        </ul>
      </div>

      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>

        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;

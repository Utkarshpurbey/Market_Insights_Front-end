import "./featured.scss";
import { useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";

const Featured = ({ insights }) => {
  useEffect(() => {}, [insights]);

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Today</h1>
      </div>
      <div className="bottom">
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Low</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">{insights.low}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Current</div>
            <div className="itemResult">
              <div className="resultAmount">{insights.price}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">High</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">{insights.high}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

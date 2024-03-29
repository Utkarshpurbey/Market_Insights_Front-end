import React from "react";

const style = {
  padding: 6,
  backgroundColor: "#fff",
  border: "1px solid #ccc"
};

const CustomTooltip = props => {
  const { active, payload } = props;
  if (active) {
    const currData = payload && payload.length ? payload[0].payload : null;
    return (
      <div className="area-chart-tooltip" style={style}>
        <p>
          {currData.date}
          {/* {currData ? format(new Date(currData.date), "yyyy-MM-dd") : " -- "} */}
        </p>
        <p>
          {"Price (₹/100 Kg) : "}
          <em>{currData ? currData.price : " -- "}</em>
        </p>
        <p>
          {"Min Price (₹/100 Kg) : "}
          <em>{currData ? currData.min_price : " -- "}</em>
        </p>
        <p>
          {"Max Price (₹/100 Kg) : "}
          <em>{currData ? currData.max_price : " -- "}</em>
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;

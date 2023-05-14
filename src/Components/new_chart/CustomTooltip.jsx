import React from "react";
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Date: ${label}`}</p>
        <p className="price">{`Price: $${payload[0].value}`}</p>
        <p className="min-price">{`Min Price: $${payload[1].value}`}</p>
        <p className="max-price">{`Max Price: $${payload[2].value}`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

export default CustomTooltip;

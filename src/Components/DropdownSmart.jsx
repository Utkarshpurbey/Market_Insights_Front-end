import React, { useEffect, useState } from "react";

import DropdownList from "./DropdownList";
import axios from "axios";

const DropdownSmart = (props) => {
  const [content, setContents] = useState([]);
  const url = `http://localhost:8080/api/getDistricts/Kerala`;
  useEffect(() => {

    axios.get(url).then((res) => {
      console.log(res.data);
      setContents(res.data);
    });
  }, []);

  return <DropdownList content={content} typeName={props.typeName}></DropdownList>;
};

export default DropdownSmart;
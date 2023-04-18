import React, { useEffect, useState } from "react";
import DropdownList from "./DropdownList";
import axios from "axios";
import { padding } from "@mui/system";

const DropdownSmart = ({dataType,name,DropdownSmartToParent,header}) => {
  const [content, setContents] = useState([]);
  const BASE_URL = `http://localhost:8080/api`;
  useEffect(() => {
    const url=`${ BASE_URL }/${dataType}/${name}` 
    axios.get(url).then((res) => {
      setContents(res.data);
    });
  }, [name]);



  return (
    <div style={{ padding:"1%"}}>
       <DropdownList content={content} dropdownToParent={DropdownSmartToParent} header={header}></DropdownList>
    </div>
  )
};

export default DropdownSmart;
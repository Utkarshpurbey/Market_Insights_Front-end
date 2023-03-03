import "./navbar.scss"
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import { useContext} from "react";
import { DarkModeContext} from "../../context/darkModeContext";

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
         <div className="header">
          <h1>Market Insights</h1>
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlined className="icon" onClick={() => dispatch({type:"TOGGLE"})}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

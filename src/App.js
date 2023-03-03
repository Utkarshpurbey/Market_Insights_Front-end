import Home from "./pages/home/Home";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import CommodityDDC from "./Components/CommodityDDC/CommodityDDC"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./Components/sidebar/Sidebar";


function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drop" element={<CommodityDDC />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



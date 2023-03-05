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
import { Container, Row ,Col } from "reactstrap";
import Navbar from "./Components/navbar/Navbar";


function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Container>
            <Navbar />
          <Row>
            <Col md = {2}>
              <Sidebar />
            </Col>
            <Col md = {10}>
              <Routes >
                <Route path = "/" element = {<Home />} />
                <Route path = "/drop" element = {<CommodityDDC />} />
              </Routes>
            </Col>
          </Row>
      </Container>
    </BrowserRouter>
     
    </div>
  );
}

export default App;



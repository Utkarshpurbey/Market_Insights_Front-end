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
import Insights from "./Components/Insights/Insights";
import About from "./pages/about/About";


function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Container>
        <Navbar />
          <Row>
            <Col xs = {4} md = {2}>
              <Sidebar />
            </Col>
            <Col xs = {8} md = {10}>
              <Routes >
                <Route path = "/" element = {<Home />} />
                <Route path = "/drop" element = {<CommodityDDC />} />
                <Route path = "/about" element = {<About />} />
              </Routes>
            </Col>
          </Row>
      </Container>
    </BrowserRouter>
     
    </div>
  );
}

export default App;



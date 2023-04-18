import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Container } from "reactstrap";
import { DarkModeContext } from "./context/darkModeContext";
import MyAppBar from './Components/MyAppBar/MyAppBar'
import Home from "./pages/home/Home";
import ProductList from './pages/commodities/ProductList'
import DropDown from './pages/region/DropDown'
import About from "./pages/about/About";
import "./style/dark.scss";
function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Container>
        <MyAppBar/>
              <Routes >
                <Route path = "/" element = {<Home />} />
                <Route path = "/commodities" element = {<ProductList />} />
                <Route path = "/region" element = {<DropDown />} />
                <Route path = "/about" element = {<About />} />
              </Routes>
      </Container>
    </BrowserRouter>
     
    </div>
  );
}

export default App;



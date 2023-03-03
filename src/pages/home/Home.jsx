import SideBar from "../../Components/sidebar/Sidebar";
import NavBar from "../../Components/navbar/Navbar";
import CommodityDDC from "../../Components/CommodityDDC/CommodityDDC";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div>
        <NavBar />
      </div>
      <div className="homeContainer">
        <SideBar />
        <div className="dropdown">
          <CommodityDDC />
        </div>
      </div>
    </div>
  );
};

export default Home;

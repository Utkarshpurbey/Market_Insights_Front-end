import "./home.scss";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import image1 from "../../images/image1.jpeg"
import image2 from "../../images/image2.png"
import image3 from "../../images/image3.png"
const Home = () => {
  return (
    <div class ="body">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1>Vegetable Market Insights</h1>
      <p>Get the latest insights on vegetable markets.</p>
      <Link to="/drop" style={{ textDecoration: "none" }}>
        <Button>Click Here to Start Receiving Insights</Button>
      </Link>
    </div>
  );
};

export default Home;
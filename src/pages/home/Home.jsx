import "./home.scss";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../images/image1.jpeg"
import image2 from "../../images/image2.png"
import image3 from "../../images/image3.png"
const Home = () => {
  return (
    <div className ="body">
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
    </div>
  );
};

export default Home;
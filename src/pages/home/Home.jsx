import "./home.scss";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Carousel+Image+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Insight 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Carousel+Image+2"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Insight 2</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Carousel+Image+3"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Insight 3</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>Vegetable Market Insights</h1>
      <p>Get the latest insights on vegetable markets.</p>
      <Link to="/drop" style={{ textDecoration: "none" }}>
        <Button>Click Here to get Started Insights</Button>
      </Link>
    </div>
  );
};

export default Home;

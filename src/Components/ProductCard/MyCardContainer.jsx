import "./ProductCard.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./ProductCard";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MyCardContainer({ market, productData }) {
  return (
    <div className="App">
      <h3>{market}</h3>
      <Carousel responsive={responsive}>
        {productData.map((item) => {
          return (
            <Product
              key={item.commodity}
              market={market}
              commodity={item.commodity}
              variety={item.variety}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

import Carousel from "react-bootstrap/Carousel";
import { LinkContainer } from "react-router-bootstrap";
const ProductCarouselComponent = () => {
  const cursorPointer = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-1.png"
          alt="First slide"
          crossOrigin="anonymous"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Laptop Best Seller</h3>
          </LinkContainer>

          <p>Acer Nitro 5, 14 inch IPS Display</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          style={{ height: "300px", objectFit: "cover" }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Around the world in 80 Days</h3>
          </LinkContainer>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          style={{ height: "300px", objectFit: "cover" }}
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Camera Best Seller</h3>
          </LinkContainer>
          <p>Canon D4x100</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;

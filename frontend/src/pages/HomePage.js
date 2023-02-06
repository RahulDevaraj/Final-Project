import CategoryCardComponent from "../components/CategoryCardComponent";
import ProductCarouselComponent from "../components/ProductCarouselComponent";
import { Row, Container } from "react-bootstrap";
const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "Laptops",
    "Cameras",
    "Accessories",
    "Software",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="mt-5 g-4">
          {categories.map((category, index) => (
            <CategoryCardComponent
              key={index}
              category={category}
              index={index}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;

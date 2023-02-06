import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
          <Col className="text-info bg-dark text-center py-5">
            &copy; KartAid
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;

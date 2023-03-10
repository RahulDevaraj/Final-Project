import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>You got an error!</Alert.Heading>
      <p>
        <Button variant="success">Back</Button>{" "}
        <Link to="/cart">
          <Button variant="danger">Back to Cart</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;

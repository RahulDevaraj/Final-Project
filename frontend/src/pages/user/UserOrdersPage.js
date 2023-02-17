import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col md={12}>
        <h1>My orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Mark Tw</td>
                  <td>2022-08-12</td>
                  <td>@$123</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>
                    <Link to="/user/order-details">Order</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;

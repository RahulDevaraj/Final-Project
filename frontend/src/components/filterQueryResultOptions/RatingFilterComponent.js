import { Fragment } from "react";
import { Form } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const RatingFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Rating</span>
      {Array.from({ length: 6 }).map((e, idx) => {
        return (
          <Fragment key={idx}>
            <Form.Check type="checkbox" id={`check-api-${idx}`} key={idx}>
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label style={{ cursor: "pointer" }}>
                {<Rating readonly size={20} initialValue={5 - idx} />}
              </Form.Check.Label>
            </Form.Check>
          </Fragment>
        );
      })}
    </>
  );
};

export default RatingFilterComponent;

import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[{ color: ["red", "blue", "green"] }, { ram: ["1 TB", "2 TB"] }].map(
        (item, idx) => {
          return (
            <div key={idx} className="mb-3">
              <Form.Label>
                <b>{Object.keys(item)}</b>
              </Form.Label>
              {item[Object.keys(item)].map((e, idx) => {
                return (
                  <Form.Check
                    key={idx}
                    type="checkbox"
                    id="default-checkbox"
                    label={e}
                  />
                );
              })}
            </div>
          );
        }
      )}
    </>
  );
};

export default AttributesFilterComponent;

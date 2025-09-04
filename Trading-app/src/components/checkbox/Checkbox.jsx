import Form from "react-bootstrap/Form";
import "./Checkbox.css";

const Checkbox = ({ id }) => {
  return (
    <>
      <Form.Check
        type="checkbox"
        id={id}
        label="Check Box"
        className="custom-checkbox"
      />
    </>
  );
};

export default Checkbox;

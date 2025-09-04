import "./SubHeader.css";
import Button from "../button/Button";

const SubHeader = ({ headingName, btnText, btnRoute }) => {
  return (
    <div className="subheader-container">
      <div style={{ fontWeight: 500 }}>{headingName}</div>
      <Button label={btnText} btnRoute={btnRoute} />
    </div>
  );
};

export default SubHeader;

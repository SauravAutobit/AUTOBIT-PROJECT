import "./BackButton.css";
import { Link } from "react-router-dom";

const BackButton = ({ label, btnRoute }) => {
  return (
    <Link to={btnRoute}>
      <button className="backBtn-global">{label}</button>
    </Link>
  );
};

export default BackButton;

import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  label,
  btnRoute,
  width = "181px",
  height = "41px",
  bgColor = "var(--primary-btn-color)",
  textColor = "var(--secondary-color)",
}) => {
  return (
    <Link to={btnRoute}>
      <button
        className="btn-global"
        style={{ width, height, background: bgColor, color: textColor }}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;

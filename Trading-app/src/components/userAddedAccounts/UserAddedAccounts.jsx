import "./UserAddedAccounts.css";
import rightArrow from "../../assets/icons/rightArrow.svg";

const UserAddedAccounts = ({ heading, accountNumber }) => {
  return (
    <div className="UserAddedAccounts-container">
      <div className="mb-4">{heading}</div>
      <div className="UserAddedAccounts-info">
        <p>{accountNumber}</p>
        <img src={rightArrow} width="11.78px" height="20px" />
      </div>
    </div>
  );
};

export default UserAddedAccounts;

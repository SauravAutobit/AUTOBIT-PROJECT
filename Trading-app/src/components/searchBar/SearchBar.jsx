import "./SearchBar.css";
import Form from "react-bootstrap/Form";
import searchIcon from "../../assets/icons/searchIcon.svg";

const SearchBar = ({ heading, placeholder }) => {
  return (
    <div className="searchbar-container">
      <div style={{ fontWeight: 500 }}>{heading}</div>
      <Form className="d-flex searchbar-input-icon">
        <Form.Control
          type="search"
          placeholder={placeholder}
          className="me-2 searchbar-input"
          aria-label="Search"
        />
        <img src={searchIcon} width={"20px"} height={"20px"} />
      </Form>
    </div>
  );
};

export default SearchBar;

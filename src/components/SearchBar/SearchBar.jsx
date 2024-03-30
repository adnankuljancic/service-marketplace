import Button from "react-bootstrap/Button";
import "./SearchBar.css";
function SearchBar() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <input
        className="input_field"
        placeholder="Search local services"
      ></input>
      <Button className="search-btn">Search</Button>
    </div>
  );
}
export default SearchBar;

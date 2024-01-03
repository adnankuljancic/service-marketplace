import Button from "react-bootstrap/Button";
import './SearchBar.css';
function SearchBar() {
  return (
    <>
      <input className="input_field"></input>
      <Button className="search-btn">Search</Button>
    </>
  );
}
export default SearchBar;

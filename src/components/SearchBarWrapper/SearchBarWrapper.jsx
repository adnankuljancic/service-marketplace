import './SearchBarWrapper.css';
import SearchBar from "../SearchBar/SearchBar";

function SearchBarWrapper() {
    return (
        <div className='sb-wrapper d-flex align-items-center justify-content-center'>
            <SearchBar/>
        </div>
    )
}
export default SearchBarWrapper;
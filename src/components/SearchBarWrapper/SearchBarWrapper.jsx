import './SearchBarWrapper.css';
import SearchBar from "../SearchBar/SearchBar";

function SearchBarWrapper() {
    return (
        <>
        <div className='sb-wrapper d-flex flex-column align-items-center justify-content-center'>
            <h1 className='mb-5 title'>Service marketplace</h1>
            <SearchBar/>
        </div>
        </>
    )
}
export default SearchBarWrapper;
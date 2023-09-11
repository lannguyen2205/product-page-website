import "./SearchBox.scss"

function SearchBox() {
    return (
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          className="search-box__content"
        ></input>
      </div>
    );
}

export default SearchBox;
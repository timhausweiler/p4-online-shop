const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.handleSearch(e)}
        name="Search"
        placeholder="Search offers"
        type="text"
      />
    </form>
  );
};

export default Search;

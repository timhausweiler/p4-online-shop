const Sort = (props) => {
  const handleSort = (event) => {
    props.handleSort(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <select className="sort" onChange={handleSort}>
        <option value="sort-by">&nbsp; Sort by: &nbsp;</option>
        <option value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
        <option value="price-ascending">
          &nbsp; Price, low to high &nbsp;
        </option>
        <option value="price-descending">
          &nbsp; Price, high to low &nbsp;
        </option>
      </select>
    </form>
  );
};

export default Sort;

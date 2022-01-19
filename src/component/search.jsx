const SearchInput = ({ label }) => {
  return (
    <div className="find-header">
      <input type="text" placeholder={label ? label : "جستجو"} />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};

export default SearchInput;

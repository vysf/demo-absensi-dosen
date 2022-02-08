import React from "react";

const Search = ({ errorInfo, htmlfor, placeholder, ...rest }) => {
  return (
    <div className="input_seacrh">
      <i className="bx bx-search"></i>
      <input
        className={errorInfo?.error ? "search input-warning" : "search"}
        placeholder={placeholder}
        {...rest}
      />
      <small className={errorInfo?.error ? "error-msg" : undefined}>
        {errorInfo?.error && errorInfo?.message}
      </small>
    </div>
  );
};

Search.defaultProps = {
  errorInfo: {
    error: false,
    message: "",
  },
  htmlFor: "input",
  placeholder: "Cari disini...",
  // rest
  id: "input",
  name: "input",
  type: "search",
};

export default Search;

import "../styles/Search.css";
import React, { useState } from "react";
import getImages from "../requests/getImages";

function Search() {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getImages(search);
  };
  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          data-testid="search-bar"
          onChange={handleSearchInput}
        />
        <button className="search-button" type="submit" name="search-name">
          search
        </button>
      </form>
      {search}
    </>
  );
}

export default Search;

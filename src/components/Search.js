import "../styles/Search.css";
import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <form className="search-form">
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

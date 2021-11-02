import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [termFromSearchBar, setTermFromSearchBar] = useState("");

  const searchedTermHandler = (event) => {
    setTermFromSearchBar(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(termFromSearchBar);
  };

  return (
    <div className={styles.container}>
      Video Search
      <form onSubmit={handleSubmit}>
        <button>Search</button>
        <label htmlFor="termFromSearchBar"></label>
        <input
          type="text"
          id="termFromSearchBar"
          placeholder="Search"
          onChange={searchedTermHandler}
          value={termFromSearchBar}
        />
      </form>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = ({ onSearch }) => {
  const [termFromSearchBar, setTermFromSearchBar] = useState("");

  const searchedTermHandler = (event) => {
    setTermFromSearchBar(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(termFromSearchBar);
    setTermFromSearchBar("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <IconButton onClick={handleSubmit}>
          <SearchOutlinedIcon style={{ color: "grey" }} />
        </IconButton>
        <label htmlFor="termFromSearchBar"></label>
        <input
          type="text"
          id="termFromSearchBar"
          placeholder="Search..."
          onChange={searchedTermHandler}
          value={termFromSearchBar}
          className={styles.textfield}
        />
      </form>
    </div>
  );
};

export default SearchBar;

import styles from "../../styles/SearchBar.module.css";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearchTermChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.iconWrapper}>
        <IconContext.Provider // Icon context is used to customize the styling of icons rendered by react-icons components.
          value={{
            size: "1.7rem",
            color: "#878787",
          }}
        >
          <BsSearch />
        </IconContext.Provider>
      </div>
      <input
        type="search"
        placeholder={" Find any thing home..."}
        className={styles.searchInput}
        onChange={handleSearchTermChange}
        value={searchTerm}
      />
    </div>
  );
}

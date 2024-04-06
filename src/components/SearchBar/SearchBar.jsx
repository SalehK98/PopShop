import styles from "../../styles/SearchBar.module.css";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
// import preformLinkSearch from "../../helpers/preformSearch";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  //   const categoriesWithLinks = userDataState.categoriesWithLinks;
  //   const prevActiveCategory = userDataState.prevActiveCategory;

  //   const handleSearch = (searchTerm) => {
  //     if (searchTerm === "") {
  //       userDataDispatch({
  //         type: ActionTypes.SET_ACTIVE_CATEGORY,
  //         payload: prevActiveCategory,
  //       });
  //       return;
  //     }
  //     userDataDispatch({
  //       type: ActionTypes.SET_ACTIVE_CATEGORY,
  //       payload: "search",
  //     });

  //     const results = preformLinkSearch(
  //       categoriesWithLinks,
  //       searchTerm,
  //       prevActiveCategory
  //     );

  //     searchDispatch({
  //       type: ActionTypes.SET_SEARCH_RESULT,
  //       payload: results,
  //     });
  //   };

  const handleSearchTermChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    // handleSearch(newSearchTerm);
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

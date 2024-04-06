import React from "react";
import styles from "../../styles/Header.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { IconContext } from "react-icons";
import { SlBasket } from "react-icons/sl";

export default function () {
  return (
    <div className={styles.header}>
      <SearchBar />
      <div className={styles.basketIconWrapper}>
        <IconContext.Provider // Icon context is used to customize the styling of icons rendered by react-icons components.
          value={{
            size: "2rem",
          }}
        >
          <SlBasket />
        </IconContext.Provider>
      </div>
    </div>
  );
}

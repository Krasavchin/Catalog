import React, { useState } from "react";

import styles from "./Pagination.module.css"

export const Pagination = ({ totalPages, onSetActiveValue }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
    onSetActiveValue(page);
  };

  const renderPages = () => {
    const pages = []; // Массив кнопок для постраничной навигации
    
    for(let i = 1; i <= totalPages; i++){
      pages.push(
        <button
          key={i}
          onClick={() => {
            handleClick(i);
          }}
          className={currentPage === i ? styles.active : ""}
        >
          {i}
        </button>
      )
    }

    return pages;
  };

  return (
  <div className={styles.pagination}>  
    {renderPages()}

  </div>
  )
};
import React, { useState } from "react";

import styles from "./Pagination.module.css"

export const Pagination = ({ totalPages, onSetActiveValue }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
    onSetActiveValue(page);
  };

  const renderPages = () => {
    const pages = [];

    pages.push(
      <button
        key={1}
        onClick={() => {
          handleClick(1);
        }}
        className={currentPage === 1 ? styles.active : ""}
      >
        1
    </button>
    )

    if (currentPage >= 5) {
      pages.push(<span key="dots-start">...</span>);
    }

    if (4 > currentPage || currentPage <= totalPages - 4) {
      for (let i = Math.max(2, currentPage - (currentPage < 5 ? 2 : 1)); i <= Math.min(totalPages, currentPage == 1 ? currentPage + 4 : currentPage < 5 ? 5 : currentPage + 1 ); i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={currentPage === i ? styles.active : ""}
          >
            {i}
          </button>
        );
      }
    }


    if (currentPage <= totalPages - (currentPage > 5 ? 4 : 1)) {
      pages.push(<span key="dots-end">...</span>);
    }


    if (currentPage < totalPages - 3) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          className={currentPage === totalPages ? styles.active : ""}
        >
          {totalPages}
        </button>
      );
    } else {
      for (let i = totalPages - 4; i <= totalPages; i ++) {
        pages.push(
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={currentPage === i ? styles.active : ""}
          >
            {i}
          </button>
        )
      }
    }

    return pages;
  };

  return (
  <div className={styles.pagination}>  
    {renderPages()}

  </div>
  )
};
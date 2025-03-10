import React, { useState } from "react";

import styles from "./Pagination.module.css"

export const Pagination = ({ totalPages, onSetActiveValue }) => {
  if(totalPages > 1){
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (page) => {
      setCurrentPage(page);
      onSetActiveValue(page);
    };

    const renderPages = () => {
      const pages = []; // Массив кнопок для постраничной навигации

      const PagesPush = (page) =>{
        pages.push(
          <button
          onClick={() => {
            handleClick(page);
          }}
          className={currentPage === page ? styles.active : ""}
          >
            {page}
          </button>
        )
      }

      const PagePushDot = () => {
        pages.push(
          <span>
            ...
          </span>
        )
      }

      PagesPush(1)

      if(currentPage <= 4){
        for(let i = 2; i <= 5 && i < totalPages; i++){
          PagesPush(i)
        }

        if(totalPages >= 8){
          PagePushDot()
        }

        else if(totalPages === 7){
          PagesPush(6)
        }
      }

      else if(currentPage >= 5 && currentPage <= totalPages - 4){
        PagePushDot()

        for(let i = currentPage - 1; i <= currentPage + 1; i++){
          PagesPush(i)
        }
        PagePushDot()
      }

      else{
        if(totalPages >= 8){
          PagePushDot()
        }

        else if(totalPages === 7){
          PagesPush(2)
        }

        for(let i = totalPages - (totalPages === 5 ? 3 : 4); i <= totalPages - 1; i++){
          PagesPush(i)
        }
      }

      if(totalPages !== 1){
        PagesPush(totalPages)
      }

      return pages;
    };

    return (
    <div className={styles.pagination}>  
      {renderPages()}
    </div>
    )
  }
  else{
    return(<></>)
  }
};

import React from "react";
import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    if (totalPages <= 1) return [];

    const pages = [currentPage];

    if (currentPage > 1) pages.unshift(currentPage - 1);
    if (currentPage < totalPages) pages.push(currentPage + 1);

    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ◀
      </button>

      {getPages().map((page) => (
        <button
          key={page}
          className={`${styles.pageNumber} ${page === currentPage ? styles.active : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={styles.arrow}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
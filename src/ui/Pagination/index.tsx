import React, { useEffect, useState } from "react";

const Pagination = ({ currentPage, total, limit, onPageChange }) => {
  const [pages, setPages] = useState<any[]>([]);
  const [activePage, setActivePage] = useState<number>(1);

  useEffect(() => {
    if (currentPage) {
      setActivePage(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    const displayLimit = 5;
    const totalPages = Math.ceil(total / limit);

    let startPage = Math.max(1, activePage - Math.floor(displayLimit / 2));
    let endPage = Math.min(totalPages, startPage + displayLimit - 1);

    if (endPage - startPage + 1 < displayLimit) {
      startPage = Math.max(1, endPage - displayLimit + 1);
    }

    const pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
    setPages(pageNumbers);
  }, [total, limit, activePage]);

  const handlePageClick = (page: number) => {
    setActivePage(page);
    if (onPageChange) {
      onPageChange(page);
    }
  };
  return (
    <div className="pagination">
      {pages.map((page) => (
        <div
          key={page}
          className={`paginationItem ${page === activePage ? "active" : ""}`}
          onClick={() => {
            handlePageClick(page);
          }}
        >
          <span className="paragraph-5 theme-gray">{page}</span>
        </div>
      ))}
    </div>
  );
};

export default Pagination;

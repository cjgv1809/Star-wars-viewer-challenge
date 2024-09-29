import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PaginationProps } from "@/types";

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  const handleScroll = () => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
  };

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
    handleScroll();
  };

  const handleArrowRight = () => {
    onPageChange(page + 1);
    handleScroll();
  };

  const handleArrowLeft = () => {
    onPageChange(page - 1);
    handleScroll();
  };

  const handleOnPageChange = (newPage: number) => {
    onPageChange(newPage);
    handleScroll();
  };

  return (
    <nav className="pagination" role="navigation" aria-label="Pagination">
      {page > 1 && (
        <button
          type="button"
          onClick={() => handleOnPageChange(page - 1)}
          onKeyDown={handleArrowLeft}
          aria-label="Previous page"
        >
          <ChevronLeft size={24} />
        </button>
      )}
      <ul className="pagination__list" role="list">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className="pagination__item" role="listitem">
            <a
              onClick={() => handlePageChange(index + 1)}
              className={`pagination__link ${
                page === index + 1 ? "active" : ""
              }`}
              role="link"
              aria-current={page === index + 1 ? "page" : undefined}
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
      {page < totalPages && (
        <button
          type="button"
          onClick={() => handleOnPageChange(page + 1)}
          onKeyDown={handleArrowRight}
          aria-label="Next page"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </nav>
  );
};

export default Pagination;

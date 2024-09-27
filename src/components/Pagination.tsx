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
    <div className="pagination">
      {page > 1 && (
        <button
          type="button"
          onClick={() => handleOnPageChange(page - 1)}
          onKeyDown={handleArrowLeft}
        >
          <ChevronLeft size={24} />
        </button>
      )}
      <ul className="pagination__list">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className="pagination__item">
            <a
              onClick={() => handlePageChange(index + 1)}
              className={`pagination__link ${
                page === index + 1 ? "active" : ""
              }`}
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
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default Pagination;

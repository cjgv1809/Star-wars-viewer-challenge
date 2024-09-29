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

  return (
    <nav className="pagination" role="navigation" aria-label="Pagination">
      <button
        type="button"
        onClick={() => handlePageChange(page - 1)}
        onKeyDown={(e) => e.key === "Enter" && handlePageChange(page - 1)}
        aria-label="Previous page"
        disabled={page === 1}
      >
        <ChevronLeft size={24} />
      </button>
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
      <span className="pagination__active-page">Page {page}</span>
      <button
        type="button"
        onClick={() => handlePageChange(page + 1)}
        onKeyDown={(e) => e.key === "Enter" && handlePageChange(page + 1)}
        aria-label="Next page"
        disabled={page === totalPages}
      >
        <ChevronRight size={24} />
      </button>
    </nav>
  );
};

export default Pagination;

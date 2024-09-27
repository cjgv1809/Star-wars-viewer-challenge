import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PaginationProps } from "@/types";

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="pagination">
      {page > 1 && (
        <button type="button" onClick={() => onPageChange(page - 1)}>
          <ChevronLeft size={24} />
        </button>
      )}
      <ul className="pagination__list">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className="pagination__item">
            <a
              href={`#${index + 1}`}
              onClick={() => onPageChange(index + 1)}
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
        <button type="button" onClick={() => onPageChange(page + 1)}>
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default Pagination;

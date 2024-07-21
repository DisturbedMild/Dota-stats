"use client";

import React from 'react';
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import {DOTS,usePagination} from "@/common/hooks/usePagination";

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="mb-2">
      {/* Left navigation arrow */}
      <button className="px-3"
              disabled={currentPage === 1}
              onClick={onPrevious}
      >
        <ArrowCircleLeftIcon style={{fill: `${currentPage === 1 ? 'grey' : ""}`}}/>
      </button>

      {paginationRange?.map((pageNumber, index) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <button key={index} className="px-2 py-1">&#8230;</button>;
        }

        // Render our Page Pills
        return (
          <button
            key={index}
            className={pageNumber === currentPage ? "px-3 py-1 bg-secondary transition-all rounded " : "px-2 py-1"}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      {/*  Right Navigation arrow */}
      <button
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <div className={`px-3`}><ArrowCircleRightIcon style={{fill: `${currentPage === lastPage ? 'grey' : ""}`}}/>
        </div>
      </button>
    </div>
  );
};

export default Pagination;

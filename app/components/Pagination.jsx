import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
        nextLabel=" >"
        previousLabel="<"
      pageCount={pageCount}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
    
    />
  );
};

export default Pagination;
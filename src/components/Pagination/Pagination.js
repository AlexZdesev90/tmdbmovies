import React from 'react';
import classes from './Pagination.module.css';

export const Pagination = ({ totalPages, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} 
          className={[`${currentPage === number.id ? classes.active : ''}`].join(' ')}
          >
            <div 
            onClick={() => paginate(number)}
            >
                {number}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

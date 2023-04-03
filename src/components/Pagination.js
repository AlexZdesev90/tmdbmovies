import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = ({ totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
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

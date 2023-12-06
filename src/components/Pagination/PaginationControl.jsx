'use client';
export function PaginationControl({ currentPage, totalPages, onPageChange }) {
  const pageNumbersCommonStyle = 'inline-flex items-center justify-center font-medium h-8';
  const pageArrowsCommonStyle = 'inline-flex items-center justify-center text-xl h-8 px-1 w-6 text-gray-400 hover:text-gray-900';

  const handlePrevAndNextClick = (pageValue) => {
    onPageChange(pageValue);
  };

  return (
    <div className="w-full text-center h-10">
      <div>
        <button
          id="prev-page"
          className={pageArrowsCommonStyle + `${currentPage == 1 ? ' cursor-not-allowed' : ''}`}
          onClick={() => handlePrevAndNextClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        
        <span className={pageNumbersCommonStyle + ' px-1 text-gray-500 drop-shadow-sm'}>
          Pág.
          <span
            id="current-page"
            className={pageNumbersCommonStyle + ' px-1.5 text-blue-500'}
          >
            {currentPage}
          </span>
          de {totalPages}
        </span>

        <button
          id="next-page"
          className={pageArrowsCommonStyle + `${currentPage >= totalPages ? ' cursor-not-allowed' : ''}`}
          onClick={() => handlePrevAndNextClick(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          »
        </button>
      </div>
    </div>
  )
}

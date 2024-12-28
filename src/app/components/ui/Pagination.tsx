interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | '...')[] = [];
    const range = 1;

    if (currentPage > range + 1) {
      pages.push(1, '...');
    }

    for (let i = Math.max(1, currentPage - range); i <= Math.min(totalPages, currentPage + range); i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - range) {
      pages.push('...', totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 select-none">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-gray-800 rounded-md disabled:opacity-50"
      >
        &#60;
      </button>

      {getPageNumbers().map((page, index) => (
        page === '...' ? (
          <span key={index} className="px-3 py-2 text-gray-500">...</span>
        ) : (
          <button
            key={index}
            onClick={() => handlePageChange(page as number)}
            className={`px-3 py-2 rounded-md ${page === currentPage ? 'text-orange' : 'text-gray-800'}`}
          >
            {page}
          </button>
        )
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-gray-800 rounded-md disabled:opacity-50"
      >
        &#62;
      </button>
    </div>
  );
};

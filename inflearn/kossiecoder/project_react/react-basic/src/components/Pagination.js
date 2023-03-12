import propTypes from "prop-types";

const Pagination = ({ currentPage, numberOfPages, onClick, limit }) => {
  /**
   * limit를 5로 적용했을 때
   *
   *   ㄴ 현재 currentSet는 현재페이지(currentPage)를 5로 나눈 후 올림
   *   ㄴ 총 페이지네이션이 12일 때 현재페이지가 6이면 1.???으로 떨어지기 때문에
   *     현재 currentSet 값은 2로 적용된다.
   */
  const currentSet = Math.ceil(currentPage / limit);
  const lastSet = Math.ceil(numberOfPages / limit);
  const startPage = limit * (currentSet - 1) + 1;
  const numberOfPageForSet =
    currentSet === lastSet ? numberOfPages % limit : limit;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {currentSet !== 1 && (
          <li className="page-item">
            <button
              className="page-link cursor-pointer"
              onClick={() => onClick(startPage - limit)}
            >
              Previous
            </button>
          </li>
        )}

        {Array(numberOfPageForSet)
          .fill(startPage)
          .map((val, idx) => val + idx)
          .map((pageNumber) => {
            return (
              <li
                key={pageNumber}
                className={`page-item ${
                  currentPage === pageNumber ? "active" : ""
                }`}
              >
                <button
                  className="page-link cursor-pointer"
                  onClick={() => onClick(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}

        {currentSet !== lastSet && (
          <li className="page-item">
            <button
              className="page-link cursor-pointer"
              onClick={() => onClick(startPage + limit)}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: propTypes.number,
  numberOfPages: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
  limit: propTypes.number,
};

Pagination.defaultProps = {
  currentPage: 1,
  limit: 5,
};

export default Pagination;

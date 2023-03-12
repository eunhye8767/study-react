import propTypes from "prop-types";

const Pagination = ({ currentPage, numberOfPages }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link">Previous</a>
        </li>

        {Array(numberOfPages).fill(1).map((val, idx) => val + idx).map(pageNumber => {
          return (
            <li className={`page-item ${currentPage === pageNumber ? "active" : ""}`}>
              <a className="page-link" href="#">
                {pageNumber}
              </a>
            </li>    
          )
        })}

        {/* <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className={`page-item ${currentPage === 2 ? "active" : ""}`}>
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className={`page-item ${currentPage === 3 ? "active" : ""}`}>
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: propTypes.number,
  numberOfPages: propTypes.number
};

Pagination.defaultProps = {
  currentPage: 1,
};

export default Pagination;

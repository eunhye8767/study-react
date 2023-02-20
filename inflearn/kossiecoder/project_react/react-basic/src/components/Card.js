import PropTypes, { string } from "prop-types";

const Card = ({ title, children }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>{title}</div>
          {children && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
};

// Card.propType = {
//   title: PropTypes.string,
// }

// 필수 항목
Card.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
}

// 기본값 적용
Card.defaultProps = {
  children: null
}

export default Card;
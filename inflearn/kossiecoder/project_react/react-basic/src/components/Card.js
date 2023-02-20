import PropTypes from "prop-types";

const Card = ({ title, onclick, children }) => {
  return (
    <div className="card mb-3 cursor-pointer" onClick={onclick}>
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
  onclick: PropTypes.func,
}

// 기본값 적용
Card.defaultProps = {
  children: null,
  onclick: () => {},
}

export default Card;
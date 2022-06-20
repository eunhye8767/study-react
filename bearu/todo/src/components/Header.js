import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">todo-list</Link>
      </h1>
      <div className="menu">
        <Link to="/todo" className="link">Todo</Link>
        <Link to="/done" className="link">Done</Link>
        <Link to="/create_item" className="link">Add</Link>
      </div>
    </div>
  );
};
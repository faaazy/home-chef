import { Link } from "react-router";
import "./Tag.css";

const Tag = ({ linkTo, className, children }) => {
  return (
    <button className={`tag ${className}`}>
      <Link to={linkTo}>{children}</Link>
    </button>
  );
};

export default Tag;

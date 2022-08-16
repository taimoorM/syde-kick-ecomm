import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <li>
      <Link to={`/category/${category}`}>
        <h3>{category}</h3>
      </Link>
    </li>
  );
};

export default Category;

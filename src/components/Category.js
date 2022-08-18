import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <li
      className="Category"
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/assets/${category}-bg.jpg")`,
      }}
    >
      <Link to={`/category/${category}`}>{category}</Link>
    </li>
  );
};

export default Category;

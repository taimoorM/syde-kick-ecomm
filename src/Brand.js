import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  return (
    <li>
      <Link to={`/brand/${brand}`}>
        <h3>{brand}</h3>
      </Link>
    </li>
  );
};

export default Brand;

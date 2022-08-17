import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const brandPath = brand.toLowerCase().replaceAll(" ", "-");
  return (
    <li className="Brand">
      <Link to={`/brand/${brandPath}`}>
        <div className="brandLogo">
          <img
            src={`${process.env.PUBLIC_URL}/assets/${brandPath}-logo.png`}
            alt={brand}
          />
        </div>
      </Link>
    </li>
  );
};

export default Brand;

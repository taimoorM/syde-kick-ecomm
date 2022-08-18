import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Product from "../components/Product";

const CategoryPage = ({ products }) => {
  const { category } = useParams();
  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  const categoryList = [];
  products.forEach((product) => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category);
    }
  });

  return (
    <section className="CategoryPage">
      <div className="wrapper">
        {categoryList.indexOf(category) === -1 ? (
          <ErrorPage />
        ) : (
          <>
            <h2 className="pageTitle">{`${category} Footwear`}</h2>
            <ul className="products">
              {categoryProducts.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </ul>

            <Link to="/">
              <FontAwesomeIcon className="backLink" icon={faAngleLeft} />
              Back
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;

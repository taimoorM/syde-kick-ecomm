import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Product from "./Product";

const CategoryPage = ({ products }) => {
  const { cat } = useParams();
  const categoryProducts = [];
  products.forEach((product) => {
    if (product.category === cat) {
      categoryProducts.push(product);
    }
  });

  const categoryList = [];
  products.forEach((product) => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category);
    }
  });

  return (
    <section className="CategoryPage">
      <div className="wrapper">
        {categoryList.indexOf(cat) === -1 ? (
          <ErrorPage />
        ) : (
          <>
            <h2 className="pageTitle">{`${cat} Footwear`}</h2>
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

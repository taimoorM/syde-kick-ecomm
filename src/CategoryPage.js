import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams, Link } from "react-router-dom";
import Product from "./Product";

const CategoryPage = ({ products }) => {
  const { cat } = useParams();
  const categoryProducts = [];
  products.forEach((product) => {
    if (product.category === cat) {
      categoryProducts.push(product);
    }
  });

  console.log(categoryProducts);

  return (
    <section className="CategoryPage">
      <div className="wrapper">
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
      </div>
    </section>
  );
};

export default CategoryPage;

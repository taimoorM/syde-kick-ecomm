import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Product from "./Product";

const BrandPage = ({ products }) => {
  const [error, setError] = useState(false);
  const { brand } = useParams();
  const brandProducts = [];
  const brandTitle = brand.split("-").join(" ");
  const brandList = [];
  products.forEach((product) => {
    if (!brandList.includes(product.brand)) {
      brandList.push(product.brand);
    }
  });

  products.forEach((product) => {
    if (product.brand === brandTitle) {
      brandProducts.push(product);
    }
  });

  return (
    <section className="BrandPage">
      <div className="wrapper">
        {brandList.indexOf(brandTitle) === -1 ? (
          <ErrorPage />
        ) : (
          <>
            <h2 className="pageTitle">{brandTitle}</h2>

            <ul className="products">
              {brandProducts.map((product) => (
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

export default BrandPage;

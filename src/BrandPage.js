import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const BrandPage = ({ products }) => {
  const { brand } = useParams();
  const brandProducts = [];
  products.forEach((product) => {
    if (product.brand === brand) {
      brandProducts.push(product);
    }
  });

  return (
    <section className="CategoryPage">
      <div className="wrapper">
        <h2 className="pageTitle">{`${brand}`}</h2>

        <ul className="products">
          {brandProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BrandPage;

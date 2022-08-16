import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const BrandPage = ({ products }) => {
  const { brand } = useParams();
  const brandProducts = [];
  const brandTitle = brand.split("-").join(" ");
  products.forEach((product) => {
    if (product.brand === brandTitle) {
      brandProducts.push(product);
    }
  });

  return (
    <section className="CategoryPage">
      <div className="wrapper">
        <h2 className="pageTitle">{`${brandTitle}`}</h2>

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

import React from "react";
import { useParams } from "react-router-dom";
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
    <div className="wrapper">
      <div className="Category">
        <h2 className="pageTitle">{`${cat} Footwear`}</h2>
      </div>
      <ul className="products">
        {categoryProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;

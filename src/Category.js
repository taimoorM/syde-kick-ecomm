import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Category = ({ products }) => {
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
        <h2>{`${cat} Footwear`}</h2>
      </div>
      <ul className="products">
        {categoryProducts.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

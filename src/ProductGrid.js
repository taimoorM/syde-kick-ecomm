import Product from "./Product";

const ProductGrid = ({ products }) => {
  return (
    <div className="ProductGrid">
      <div className="wrapper">
        <h2>Products</h2>
        <ul>
          {products.map((product) => {
            return <Product shoe={product} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductGrid;

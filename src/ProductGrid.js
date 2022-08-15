import Product from "./Product";

const ProductGrid = ({ products }) => {
  return (
    <div className="ProductGrid">
      <div className="wrapper">
        <h2>Products</h2>
        <ul className="products">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductGrid;

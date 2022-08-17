import Product from "./Product";

const ProductGrid = ({ products }) => {
  return (
    <section className="ProductGrid">
      <div className="wrapper">
        <h2 className="sectionHeading">Our Collection</h2>
        <ul className="products">
          {products.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductGrid;

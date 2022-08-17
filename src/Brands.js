import Brand from "./Brand";

const Brands = ({ products }) => {
  const brandList = [];
  products.forEach((product) => {
    if (!brandList.includes(product.brand)) {
      brandList.push(product.brand);
    }
  });
  return (
    <section className="Brands">
      <div className="wrapper">
        <h2 className="sectionHeading">Brands</h2>

        <ul className="brandList">
          {brandList.map((brand, idx) => (
            <Brand brand={brand} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;

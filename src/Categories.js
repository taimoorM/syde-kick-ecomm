import Category from "./Category";

const Categories = ({ products }) => {
  const categoryList = [];
  products.forEach((product) => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category);
    }
  });

  return (
    <section className="Categories">
      <div className="wrapper">
        <h2 className="sectionHeading">Shop by Category</h2>
        <ul className="categoryList">
          {categoryList.map((category) => (
            <Category category={category} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;

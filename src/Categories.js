const Categories = ({ products }) => {
  const categoryList = [];
  products.forEach((product) => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category);
    }
  });

  return (
    <div className="Categories">
      <div className="wrapper">
        <h2>Shop by Category</h2>
        {categoryList.map((category) => {
          return (
            <ul>
              <li>
                <h3>{category}</h3>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

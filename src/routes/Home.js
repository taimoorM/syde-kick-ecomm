import Brands from "../Brands";
import Categories from "../Categories";
import Header from "../Header";
import ProductGrid from "../ProductGrid";

const Home = ({ products }) => {
  return (
    <>
      <Header />
      <Categories products={products} />
      <Brands products={products} />
      <ProductGrid products={products} />
    </>
  );
};

export default Home;

import Brands from "../components/Brands";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";

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

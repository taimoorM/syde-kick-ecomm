import Categories from "../Categories";
import Header from "../Header";
import ProductGrid from "../ProductGrid";
import Footer from "../Footer";

const Home = ({ products }) => {
  return (
    <>
      <Header />
      <Categories products={products} />
      <ProductGrid products={products} />
      <Footer />
    </>
  );
};

export default Home;

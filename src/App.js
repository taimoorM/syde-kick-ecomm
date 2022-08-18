import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { BasketProvider } from "./Context";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import CategoryPage from "./routes/CategoryPage";
import BrandPage from "./routes/BrandPage";
import ErrorPage from "./routes/ErrorPage";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //holding the database details
    const database = getDatabase(firebase);

    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      const data = response.val();
      setProducts(data);
    });
  }, []);
  return (
    <BasketProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home products={products} />} />

        <Route
          path="/categories"
          element={<Categories products={products} />}
        />
        <Route
          path="/category/:category"
          element={<CategoryPage products={products} />}
        />
        <Route
          path="/brand/:brand"
          element={<BrandPage products={products} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Toaster position="bottom-center" />
      <Footer />
    </BasketProvider>
  );
}

export default App;

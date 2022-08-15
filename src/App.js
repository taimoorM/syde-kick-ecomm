import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { BasketProvider } from "./Context";
import Nav from "./Nav";
import Categories from "./Categories";
import Home from "./routes/Home";
import Category from "./Category";
import Footer from "./Footer";

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
          path="/category/:cat"
          element={<Category products={products} />}
        />
      </Routes>
      <Footer />
    </BasketProvider>
  );
}

export default App;

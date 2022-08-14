import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { BasketContext } from "./Context";
import Nav from "./Nav";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import Categories from "./Categories";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

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
    <BasketContext.Provider value={{ basket, setBasket }}>
      <Nav />
      <Routes>
        <Route path="/">
          <Header />
          <Categories products={products} />
          <ProductGrid products={products} />
        </Route>
        <Route path="/category" element={<Categories />} />
        <Route path="/category:cat" />
      </Routes>
    </BasketContext.Provider>
  );
}

export default App;

import { useEffect, useState } from "react";
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const ProductGrid = () => {
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
    <div className="ProductGrid">
      <div className="wrapper">
        <h2>Products</h2>
        {}
      </div>
    </div>
  );
};

export default ProductGrid;

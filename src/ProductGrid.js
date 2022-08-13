import { useEffect, useState } from "react";
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import Product from "./Product";

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
        <ul className="productGrid">
          {products.map((product) => {
            return <Product shoe={product} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductGrid;

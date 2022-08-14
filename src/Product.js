import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { BasketContext } from "./Context";

const Product = ({ shoe }) => {
  const { img, title, discount, price } = shoe;
  const newPrice = price - price * discount;
  const { basket, setBasket } = useContext(BasketContext);

  const addToBasket = () => {
    // if (basket. ) {
    //   const qty = shoe.qty + 1;
    //   setBasket([...basket, { ...shoe, qty: qty }]);
    // } else {
    //   setBasket([...basket, { ...shoe, qty: 1 }]);
    // }
  };

  console.log(basket);

  return (
    <div className="Product">
      <div className="productImg">
        <img
          src="https://m.media-amazon.com/images/I/614vLDZWsAL._AC_UY695_.jpg"
          alt=""
        />
      </div>
      <div className="productInner">
        <div className="productInfo">
          <h3 className="productTitle">{title}</h3>
          <p className="productPrice">{newPrice.toFixed(2)}</p>
        </div>
        <div className="addBasket">
          <button className="button addBtn" onClick={addToBasket}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

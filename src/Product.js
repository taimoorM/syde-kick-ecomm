import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Product = ({ shoe }) => {
  console.log(shoe);
  const { img, title, discount, price } = shoe;
  const newPrice = price - price * discount;

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
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default Product;

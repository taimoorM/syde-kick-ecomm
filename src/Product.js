import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProductModal from "./ProductModal";
import AddProduct from "./AddProduct";

const Product = ({ product }) => {
  const { img, title, discount, price } = product;
  const newPrice = price - price * discount;

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="Product">
      <div className="productImg">
        <img src={`./assets${img}`} alt="" />
      </div>
      <div className="productInner">
        <div className="productInfo">
          <h3 className="productTitle">{title}</h3>
          <p className="productPrice">{newPrice.toFixed(2)}</p>
        </div>
        <div className="addBasket">
          <button className="button addBtn" onClick={() => setShow(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          {show && (
            <ProductModal show={show}>
              <AddProduct product={product} handleClose={handleClose} />
            </ProductModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "react-modal";
import AddProduct from "./AddProduct";

const Product = ({ product }) => {
  const { img, title, discount, price } = product;
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const newPrice = price - price * discount;

  const imagePrimary = `${process.env.PUBLIC_URL}/assets${
    img[Object.keys(img)[0]]
  }`;
  const imageSecondary = `${process.env.PUBLIC_URL}/assets${
    img[Object.keys(img)[1]]
  }`;
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <li
      className="Product"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="productImg">
        <img src={hover ? imageSecondary : imagePrimary} alt="{title}" />
      </div>
      <div className="productInner">
        <div className="productInfo">
          <h3 className="productTitle">{title}</h3>
          <p className="productPrice">{newPrice.toFixed(2)}</p>
        </div>
        <div className="addBasket">
          <button className="button addBtn" onClick={openModal}>
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <Modal isOpen={isOpen}>
            <AddProduct product={product} closeModal={closeModal} />
          </Modal>
        </div>
      </div>
    </li>
  );
};

export default Product;

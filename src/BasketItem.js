import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "./Context";
import toast from "react-hot-toast";

const BasketItem = ({ img, colour, size, price, quantity, title, idx }) => {
  const { dispatch } = useBasket();

  const notify = () => {
    toast.error(`${title} was removed from your basket`);
  };

  const handleRemove = () => {
    dispatch({
      type: "removeFromBasket",
      idx: idx,
    });
    notify();
  };

  return (
    <li className="BasketItem">
      <div className="itemThumbnail">
        <img
          src={`${process.env.PUBLIC_URL}/assets${img}`}
          alt="{item.title}"
        />
      </div>
      <div className="itemInfo">
        <h3>{title}</h3>
        <div className="itemSpecs">
          <span className="colourLabel">Colour:</span>{" "}
          <span className="itemColour">{colour}</span>
          <span className="sizeLabel">Size:</span>{" "}
          <span className="itemSize">{size}</span>
        </div>
        <div className="itemTotal">
          <span className="itemQuantity">{quantity} x </span>
          <span className="itemPrice">${price.toFixed(2)}</span>
        </div>
      </div>
      <button className="deleteItemBtn" onClick={handleRemove}>
        <FontAwesomeIcon icon={faCircleMinus} />
      </button>
    </li>
  );
};

export default BasketItem;

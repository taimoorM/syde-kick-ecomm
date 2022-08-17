import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "./Context";

const BasketItem = ({ img, colour, size, price, quantity, title, idx }) => {
  const { dispatch } = useBasket();

  const handleRemove = () => {
    dispatch({
      type: "removeFromBasket",
      idx: idx,
    });
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
      <button className="deleteItemBtn">
        <FontAwesomeIcon icon={faCircleMinus} onClick={handleRemove} />
      </button>
    </li>
  );
};

export default BasketItem;

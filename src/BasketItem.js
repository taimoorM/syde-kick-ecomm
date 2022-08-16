import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

const BasketItem = ({ img, colour, size, price, quantity, title }) => {
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
          <span className="itemColour">{colour}</span>
          <span className="itemSize">{size}</span>
        </div>
        <div className="itemTotal">
          <span className="itemQuantity">{quantity}</span>
          <span className="itemPrice">{price}</span>
        </div>
      </div>
      <button className="deleteItemBtn">
        <FontAwesomeIcon icon={faRemove} />
      </button>
    </li>
  );
};

export default BasketItem;

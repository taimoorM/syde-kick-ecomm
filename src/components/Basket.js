import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import BasketItem from "./BasketItem";
import { useBasket } from "../Context";
import { getBasketTotal } from "../utility";

const Basket = ({ closeBasket }) => {
  const { basket } = useBasket();

  const subTotal = getBasketTotal(basket);
  return (
    <div className="Basket">
      <button className="closeBtn" onClick={closeBasket}>
        <FontAwesomeIcon icon={faRemove} />
      </button>
      {basket.length === 0 ? (
        <p>You have no items in the basket.</p>
      ) : (
        <>
          <ul className="basketList">
            {basket.map((item, idx) => {
              return (
                <BasketItem
                  key={`${item.id}${idx}`}
                  title={item.title}
                  img={item.img}
                  colour={item.colourChoice}
                  size={item.sizeChoice}
                  quantity={item.quantity}
                  price={item.price}
                  idx={idx}
                />
              );
            })}
          </ul>
          <div className="subtotal">
            <span>Subtotal: </span>${subTotal.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;

import BasketItem from "./BasketItem";
import { useBasket } from "./Context";

export const Basket = () => {
  const { basket, dispatch } = useBasket();

  return (
    <ul class="Basket">
      {basket.length === 0 ? (
        <p>You have no items in the basket.</p>
      ) : (
        basket.map((item) => {
          return (
            <BasketItem
              title={item.title}
              img={item.img}
              colour={item.colourChoice}
              size={item.sizeChoice}
              quantity={item.quantity}
              price={item.price}
            />
          );
        })
      )}
    </ul>
  );
};

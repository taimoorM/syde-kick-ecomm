import BasketItem from "./BasketItem";
import { useBasket } from "./Context";

export const Basket = ({ openBasket }) => {
  const { basket, dispatch } = useBasket();

  return (
    <div className="Basket">
      <ul class="basketItems">
        {basket.map((item) => {
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
        })}
      </ul>
    </div>
  );
};

import React from "react";
import { useBasket } from "./Context";

export const Basket = () => {
  const { basket, dispatch } = useBasket();
  return (
    <div class="Basket">
      <ul class="basketItems">
        {basket.map((item) => {
          <li className="basketItem">
            <div className="itemThumbnail">
              <img
                src={`${process.env.PUBLIC_URL}/assets${item.img}`}
                alt="{item.title}"
              />
            </div>
            <div className="itemInfo">
              <h3>{item.title}</h3>
              <span className="itemColour">{item.colourChoice}</span>
              <span className="itemSize">{item.sizeChoice}</span>
              <span className="item.price"></span>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
};

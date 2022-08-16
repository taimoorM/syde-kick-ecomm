import { useState } from "react";
import { useBasket } from "./Context";

const AddProduct = ({ product, closeModal }) => {
  const { id, img, title, discount, price, brand } = product;
  const { basket, dispatch } = useBasket();
  const [sizeChoice, setSizeChoice] = useState("choose");
  const [colourChoice, setColourChoice] = useState(Object.keys(img)[0]);

  const handleSizeChoice = (e) => {
    setSizeChoice(e.target.value);
  };

  const handleCoulorChoice = (e) => {
    setColourChoice(e.target.value);
  };

  const addToBasket = (e) => {
    e.preventDefault();

    dispatch({
      type: "addToBasket",
      item: {
        id,
        title,
        brand,
        price: price - price * discount,
        discount,
        colourChoice,
        sizeChoice,
        img: product.img[colourChoice],
      },
    });
    closeModal();
    console.log(basket);
  };
  return (
    <div className="AddProduct">
      <button className="closeBtn" onClick={closeModal}>
        X
      </button>
      <div className="productImg">
        <img
          src={
            colourChoice
              ? `${process.env.PUBLIC_URL}/assets${img[colourChoice]}`
              : `${process.env.PUBLIC_URL}/assets${img[Object.keys(img)[0]]}`
          }
          alt={product.title}
        />
      </div>
      <div className="productDetails">
        <h2>{product.title}</h2>

        <div className="productBrand">
          <span>Brand: {product.brand}</span>
        </div>
        <div className="productPrice">
          <span>{product.price}</span>
        </div>
        <form className="productForm">
          <fieldset className="sizeField">
            <label htmlFor="size">Pick your size:</label>
            <select
              name="size"
              id="size"
              value={sizeChoice}
              onChange={(e) => handleSizeChoice(e)}
            >
              <option value="choose" disabled>
                Choose:
              </option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
            </select>
          </fieldset>
          <fieldset className="colourField">
            <legend>Pick your colour:</legend>
            {product.colours.map((colour) => {
              return (
                <div>
                  <label htmlFor={colour}>{colour}</label>
                  <input
                    type="radio"
                    id={colour}
                    name="colour"
                    value={colour}
                    onChange={(e) => handleCoulorChoice(e)}
                    checked={colourChoice === colour}
                  />
                </div>
              );
            })}
          </fieldset>
          <button onClick={addToBasket}>Add to Basket</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

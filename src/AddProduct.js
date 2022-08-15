const AddProduct = ({ product }) => {
  return (
    <div className="AddProduct">
      <button className="closeBtn">X</button>
      <div className="productImg">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="productDetails">
        <h2>{product.title}</h2>

        <div className="productBrand">
          <span>Brand: {product.brand}</span>
        </div>
        <form className="productForm">
          <fieldset className="sizeField">
            <label htmlFor="size">Pick your size:</label>
            <select name="size" id="size">
              <option value="Choose" disabled selected></option>
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
                  <input type="radio" id={colour} />
                  <label htmlFor={colour}>{colour}</label>
                </div>
              );
            })}
          </fieldset>
          <button>Add to Basket</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

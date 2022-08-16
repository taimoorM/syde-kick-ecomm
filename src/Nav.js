import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBagShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useBasket } from "./Context";
import { getQuantityTotal } from "./utility";
import { Basket } from "./Basket";
import { useState } from "react";

const Nav = () => {
  const { basket } = useBasket();
  const [openBasket, setOpenBasket] = useState(false);

  const basketQuantity = getQuantityTotal(basket);
  const closeBasket = () => {
    setOpenBasket(false);
  };

  return (
    <nav className="Nav">
      <div className="wrapper">
        <div className="logo">
          <h1>SK</h1>
          {/* <img src="" alt="Syde Kicks" /> */}
        </div>
        <form action="" className="searchBar">
          <fieldset>
            <label htmlFor="searchBar" className="sr-only">
              Search for products
            </label>
            <input type="text" id="searchBar" />
            <button className="searchBtn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </fieldset>
        </form>
        <ul className="searchIcons">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon
            icon={faBagShopping}
            onClick={() => {
              setOpenBasket(!openBasket);
            }}
          />
          {openBasket && <Basket closeBasket={closeBasket} />}
          <span>{basketQuantity}</span>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

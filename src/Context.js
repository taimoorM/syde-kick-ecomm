import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const BasketStateContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, dispatch] = useReducer(reducer, []);
  return (
    <BasketStateContext.Provider
      value={{
        data: basket,
        dispatch: dispatch,
      }}
    >
      {children}
    </BasketStateContext.Provider>
  );
};

export const useBasket = () => useContext(BasketStateContext);

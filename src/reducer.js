function reducer(state, action) {
  switch (action.type) {
    //add item to basket
    case "addToBasket": {
      //find item in basket
      const existsInBasket = state.find((item) => item.id === action.item.id);

      //if the item already exists in basket go through basket and increase the quantity of the existing item by 1
      if (existsInBasket) {
        return state.map((i) =>
          i.id === action.item.id
            ? { ...existsInBasket, quantity: existsInBasket.quantity + 1 }
            : i
        );
      }

      //if item is not in basket, add item to basket with a property quantity: 1
      return [...state, { ...action.item, qty: 1 }];
    }

    default:
      throw new Error();
  }
}

export default reducer;

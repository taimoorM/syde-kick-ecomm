function reducer(state, action) {
  const itemCheck = (item) => {
    return (
      item.id === action.item.id &&
      item.sizeChoice === action.item.sizeChoice &&
      item.ColourChoice === action.item.ColourChoice
    );
  };

  switch (action.type) {
    //add item to basket
    case "addToBasket": {
      //find item in basket
      const existsInBasket = state.find((item) => itemCheck(item));

      //if the item already exists in basket go through basket and increase the quantity of the existing item by 1
      if (existsInBasket) {
        return state.map((item) =>
          itemCheck(item)
            ? { ...existsInBasket, quantity: existsInBasket.quantity + 1 }
            : item
        );
      }

      //if item is not in basket, add item to basket with a property quantity: 1
      return [...state, { ...action.item, quantity: 1 }];
    }

    //remove from basket
    case "removeFromBasket": {
      let newBasket = [...state];

      newBasket.splice(action.idx, 1);

      return newBasket;
    }

    default:
      throw new Error();
  }
}

export default reducer;

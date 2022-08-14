//Get quantity total from basket by adding every quantity property from each item
export const getQuantityTotal = (basket) => {
  let totalQuantity = 0;

  basket.forEach((item) => {
    totalQuantity += item.quantity;
  });

  return totalQuantity;
};

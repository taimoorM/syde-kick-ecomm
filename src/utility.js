//Get quantity total from basket by adding every quantity property from each item
export const getQuantityTotal = (basket) => {
  let totalQuantity = 0;

  basket.forEach((item) => {
    totalQuantity += item.quantity;
  });

  return totalQuantity;
};

export const getBasketTotal = (basket) => {
  let total = 0;

  basket.forEach((item) => {
    total += item.price + item.quantity;
  });

  return total;
};

export const filterProducts = (arr, val) => {
  const newArr = arr.filter((i) => i.val === val);
  return newArr;
};

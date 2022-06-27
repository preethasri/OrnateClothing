const compose =
  (...args) =>
  mainArg =>
    args.reduce((accumulatedF, currentF) => currentF(accumulatedF), mainArg);

const offerFunctions = coupons =>
  coupons.reduce((acc, curr) => (curr.offerStatus ? [...acc, curr.reductionFunction] : acc), []);

const priceCalculator = cartItems => {
  return cartItems.reduce(
    (totalPrice, currentProduct) => {
      return {
        price: totalPrice.price + currentProduct.price * currentProduct.qty,
        
        deliverCharges:
          currentProduct.price < 1000
            ? totalPrice.deliverCharges + 150
            : totalPrice.deliverCharges,
      };
    },
    {price: 0, deliverCharges: 0 }
  );
};

export { compose, offerFunctions, priceCalculator };

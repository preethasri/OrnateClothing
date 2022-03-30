function filterByRange(ratedProducts, range) {
    if (range) {
      const newData = ratedProducts.filter((product) => Number(product.price) <= range);
      return newData;
    }
    return ratedProducts;
  }
  
  export { filterByRange };
  
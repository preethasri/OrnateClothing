function sortByRating(filteredProducts, rating) {
    if (rating === "ABOVE_FOUR") {
      const filterByFour = filteredProducts.filter(
        (product) => 4 <= product.ratings
      );
      return filterByFour;
    }
    if (rating === "ABOVE_THREE") {
      const filterByThree = filteredProducts.filter(
        (product) => 3 <= product.ratings
      );
      return filterByThree;
    }
    if (rating === "ABOVE_TWO") {
      const filterByTwo = filteredProducts.filter(
        (product) => 2 <= product.ratings
      );
      return filterByTwo;
    }
    if (rating === "ABOVE_ONE") {
      const filterByOne = filteredProducts.filter(
        (product) => 1 <= product.ratings
      );
      return filterByOne;
    }
    return filteredProducts;
  }
  
  export { sortByRating };
  
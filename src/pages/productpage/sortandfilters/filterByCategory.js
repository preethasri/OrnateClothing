function filterByCategory(sortedData, men, women, shoe, hat,handbag) {
    let menCategory = [],
      womenCategory = [],
      shoeCategory = [],
      hatCategory = [],
      handbagCategory=[];

    if (!men && !women && !shoe && !hat && !handbag) {
      return sortedData;
    }
    if (men) {
      menCategory = sortedData.filter(
        (product) => product.categoryName === "men"
      );
    }
    if (women) {
      womenCategory = sortedData.filter(
        (product) => product.categoryName === "women"
      );
    }
    if (shoe) {
      shoeCategory = sortedData.filter(
        (product) => product.categoryName === "shoe"
      );
    }
    if (hat) {
      hatCategory = sortedData.filter(
        (product) => product.categoryName === "hat"
      );
    }
    if (handbag) {
        handbagCategory = sortedData.filter(
          (product) => product.categoryName === "handbag"
        );
      }
  
    return [
       ... menCategory ,
       ... womenCategory ,
      ...  shoeCategory ,
        ...hatCategory ,
        ...handbagCategory
    ];
  }
  
  export { filterByCategory };
  
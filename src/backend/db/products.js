import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "black shirt",
    image:"/assets/productImages/blackshirt.png",
    price: "400",
    categoryName: "men",
    ratings:"4.0",
    isTopSelling:false,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."

  },
  {
    _id: uuid(),
    title: "maxi dress",
    image:"/assets/productImages/maxiDress.png",
    price: "800",
    categoryName: "women",
    ratings:"3.8",
    isToSelling:false,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  {
    _id: uuid(),
    title: "nike shoe",
    image:"/assets/productImages/nikeshoe.png",
    price: "1000",
    categoryName: "shoe",
    ratings:"3.8",
    isTopSelling:true,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  {
    _id: uuid(),
    title: "black shoe",
    image:"/assets/productImages/blackshoe.png",
    price: "400",
    categoryName: "shoe",
    ratings:"4.6",
    isTopSelling:false,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  {
    _id: uuid(),
    title: "blueshoe",
    image:"/assets/productImages/blueshoe.png",
    price: "600",
    categoryName: "shoe",
    ratings:"2.9",
    isTopSelling:false,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  {
    _id: uuid(),
    title: "brownhat",
    image:"/assets/productImages/brownhat.png",
    price: "100",
    categoryName: "hat",
    ratings:"3.5",
    isTopSelling:true,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  {
    _id: uuid(),
    title: "halfsleeveblackshirt",
    image:"/assets/productImages/halfsleeveblackshirt.png",
    price: "1100",
    categoryName: "men",
    ratings:"4.1",
    isTopSelling:false,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  {
    _id: uuid(),
    title: "lightblue shirt",
    image:"/assets/productImages/lightblueshirt.png",
    price: "750",
    categoryName: "men",
    ratings:"1.7",
    isTopSelling:false,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  {
    _id: uuid(),
    title: "pink top",
    image:"/assets/productImages/pinktop.png",
    price: "750",
    categoryName: "women",
    ratings:"4.5",
    isTopSelling:true,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  
  {
    _id: uuid(),
    title: "royal blue shirt",
    image:"/assets/productImages/royalblueshirt.png",
    price: "1050",
    categoryName: "men",
    ratings:"4.4",
    isTopSelling:true,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  {
    _id: uuid(),
    title: "faux fur handbag",
    image:"/assets/productImages/handbag.png",
    price: "1000",
    categoryName: "handbag",
    ratings:"2.9",
    isTopSelling:false,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },
  {
    _id: uuid(),
    title: "pink shirt",
    image:"/assets/productImages/pinkshirt.png",
    price: "550",
    categoryName: "women",
    ratings:"3.9",
    isTopSelling:false,
    description:"Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply text copy that serves to fill a space without actually saying anything meaningful."
  },

];
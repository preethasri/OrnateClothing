import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    image:"/assets/categoryImages/categorymen.jpg"
  },
  {
    _id: uuid(),
    categoryName: "HandBags",
    image:"/assets/categoryImages/handbag.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    image:"/assets/categoryImages/categorywomen.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Hat",
    image:
      "/assets/categoryImages/hat.jpg",
  },
  
  {
    _id: uuid(),
    categoryName: "Shoes",
    image:"/assets/categoryImages/shoe.jpg",
  },
  {
    _id: uuid(),
    categoryName: "EyeGlasses",
    image:"/assets/categoryImages/specs.jpg",
  },
]


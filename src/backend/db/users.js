import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    orders:[],
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Adarsh Balika",
        mobile: "8765432190",
        zipCode: "632006",
        street: "163 / gandhi street,katpadi post,vellore ",
        state: "tamilNadu",
        country: "India",
      },
    ]
  },
  {
    _id: uuid(),
    firstName: "chitra",

    email: "chitra12@gmail.com",
    password: "chitra",
    orders:[],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Chitra Madhavan",
        mobile: "8765432190",
        zipCode: "632006",
        street: "163 / gandhi street,katpadi post,vellore ",
        state: "tamilNadu",
        country: "India",
      },
    ],
  },
];

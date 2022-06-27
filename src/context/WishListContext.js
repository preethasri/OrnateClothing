import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

const useWishList = () => useContext(WishlistContext);

const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const {
    auth: { isAuthenticated, token },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const response = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: token,
            },
          });
          const wishList = response.data.wishlist;
          setWishList(wishList);
        } catch (error) {
          console.error("ERROR", error);
        }
      })();
    } else {
      setWishList([]);
    }
  }, [isAuthenticated, token]);
  return (
    <WishlistContext.Provider value={{ wishList, setWishList }}>
      {children}
    </WishlistContext.Provider>
  );
};

export { WishListProvider, useWishList };

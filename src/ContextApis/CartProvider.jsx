import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import axios from "axios";
import { UsersContext } from "./UsersContext";

export default function CartProvider(props) {
  const [CartData, setCartData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const { CurrentUser } = useContext(UsersContext);

  useEffect(() => {
    if (CurrentUser?.id) {
      axios
        .get(`http://localhost:2000/Orders/${CurrentUser?.id}`)
        .then((res) => {
          const data = res.data.cart;
          setCartData(data);
        })
        .catch((err) => {
          console.error(err);
          const data = localStorage.getItem('cart');
          setCartData(data ? JSON.parse(data) : []);
        });
    }
  }, [CurrentUser]);

  const AddToCart = (id, price) => {
    const item = isExsist(id);
    if (item) {
      item.qty++;
      setCartData(
        CartData.map((e) => (e.id === item.id ? item : e))
      );
    } else {
      setCartData([
        ...CartData,
        {
          id: id,
          price: price,
          qty: 1,
        },
      ]);
    }
  };

  const deleteFromCart = (id) => {
    setCartData(CartData.filter((e) => e.id !== id));
  };

  const deleteAllCart = () => {
    setCartData([]);
  };

  const increaseQty = (id) => {
    const item = isExsist(id);
    if (item) {
      item.qty++;
      setCartData(CartData.map((e) => (e.id === item.id ? item : e)));
    }
  };

  const decreaseQty = (id) => {
    const item = isExsist(id);
    if (item && item.qty > 1) {
      item.qty--;
      setCartData(CartData.map((e) => (e.id === item.id ? item : e)));
    }
  };

  useEffect(() => {
    if (CartData) {
      let sum = 0;
      CartData.forEach((e) => {
        sum += e.qty * e.price;
      });
      setTotalPrice(sum);
      localStorage.setItem('cart', JSON.stringify(CartData));
      if (CurrentUser) {
        axios
          .put(`http://localhost:2000/Orders/${CurrentUser?.id}`, {
            id: CurrentUser?.id,
            cart: CartData,
          })
          .catch((err) => {
            if (err.response.status === 404) {
              axios.post(`http://localhost:2000/Orders`, {
                id: CurrentUser?.id,
                cart: CartData,
              });
            }
          });
      }
    }
  }, [CartData, CurrentUser]); // Include CurrentUser in the dependency array

  const isExsist = (id) => {
    const item = CartData.find((e) => e.id === id);
    return item ? item : false;
  };

  let values = {
    CartData,
    AddToCart,
    setCartData,
    increaseQty,
    decreaseQty,
    deleteFromCart,
    totalPrice,
    deleteAllCart,
  };

  return (
    <CartContext.Provider value={values}>
      {props.children}
    </CartContext.Provider>
  );
}

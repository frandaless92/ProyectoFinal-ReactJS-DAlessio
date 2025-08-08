import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (prod) => {
    const existe = cart.find((c) => c.id === prod.id);

    if (existe) {
      const nuevo = cart.map((c) => {
        if (c.id === prod.id) {
          return { ...c, quantity: c.quantity + prod.quantity };
        } else {
          return c;
        }
      });
      setCart(nuevo);
    } else {
      setCart([...cart, prod]);
    }
  };

  const deleteProductById = (id) => {
    const productsFilter = cart.filter((product) => product.id !== id);
    setCart(productsFilter);
  };

  const deleteAllProducts = () => {
    setCart([]);
  };

  const totalQuantity = () => {
    const totalProductsInCart = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return totalProductsInCart;
  };

  const totalPrice = () => {
    const totalPriceProducts = cart.reduce(
      (total, product) => total + product.precio * product.quantity,
      0
    );
    return totalPriceProducts;
  };

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addProductInCart,
        totalQuantity,
        totalPrice,
        deleteProductById,
        deleteAllProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

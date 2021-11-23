import React, { useState } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

export const CartContext = React.createContext({});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState();

  const getProductList = async () => {
    const response = await api.get('product');
    
    if (response.status === 200)
      setProducts(response.data);
  }

  function add(item) {
    const newCart = cart;
    newCart.push(item);
    toast("Item adicionado ao carrinho!");

    setCart([...newCart]);
  }

  function remove(index) {
    let newCart = cart.filter((item, i) => i !== index);

    setCart([...newCart]);
  }


  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      isOpen,
      setIsOpen,
      add,
      remove,
      products,
      setProducts,
      getProductList
    }}>
      {props.children}
    </CartContext.Provider>
  );
}
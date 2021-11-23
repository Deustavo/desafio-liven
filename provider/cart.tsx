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

  const addAmountInItem = (item, amount) => {
    const newItem = item;

    if (newItem.amount === undefined)
      newItem.amount = amount;

    else
    newItem.amount = newItem.amount + amount;

    return newItem;
  }


  const add = (item, amount) => {
    const newCart = cart;
    const newItem = item;
    newItem = addAmountInItem(item, amount);
    
    let check_index = newCart.findIndex(product => product.id === newItem.id);
    if (check_index !== -1)
      newCart[check_index] = newItem;
    else 
      newCart.push(newItem);

    toast("Item adicionado ao carrinho!");
    setCart([...newCart]);
  }

  const remove = (index) => {
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
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
      newItem.amount = newItem.amount + 1;

    return newItem;
  }


  const add = (item, amount) => {
    const newCart: Array<Object> = cart;
    let newItem: Object = item;
    newItem = addAmountInItem(newItem, amount);
    
    const check_index: number = newCart.findIndex(product => product.id === newItem.id);
    if (check_index !== -1)
      newCart[check_index] = newItem;
    else 
      newCart.push(newItem);

    toast("Item adicionado ao carrinho!");
    setCart([...newCart]);
  }

  const remove = (item) => {
    let newCart: Array<Object> = cart;

    console.log(item.amount);
    if (item.amount < 1) {
      console.log("aba");
      newCart = cart.filter((i) => i.id !== item.id);
    } else {
      const check_index: number = newCart.findIndex(product => product.id === item.id);
      newCart[check_index].amount = newCart[check_index].amount - 1;
    }

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
import { createContext, ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import { IItemCart, ICartContext } from '../store/cart/types';

export const cartContextDefaultValues: ICartContext = {
  cart: [],
  setCart: () => {},
  isOpen: false,
  setIsOpen: () => {},
  add: () => {},
  remove: () => {},
  products: [],
  setProducts: () => {},
  getProductList: () => {},
  totalValue: 0,
  setTotalValue: () => {},
};

export const CartContext = createContext<ICartContext>(cartContextDefaultValues);

type Props = {
  children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<IItemCart[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<IItemCart[]>([]);
  const [totalValue, setTotalValue] = useState<number | undefined>();

  useEffect(() => {
    let value = 0;

    cart.map(item => {
        value = (value + parseFloat(item.price)) * item.amount;
    });
    
    setTotalValue(value);
  }, [cart]);

  const getProductList = async () => {
    const response = await api.get('product');
    
    if (response.status === 200)
      setProducts(response.data);
  }

  const addAmountInItem = (item: IItemCart, amount: number) => {
    const newItem: IItemCart = item;

    if (newItem.amount === undefined)
      newItem.amount = amount;

    else
      newItem.amount = newItem.amount + 1;

    return newItem;
  }


  const add = (item: IItemCart, amount: number): void => {
    const newCart: Array<IItemCart> = cart;
    let newItem: IItemCart = item;
    newItem = addAmountInItem(newItem, amount);
    
    const check_index: number = newCart.findIndex(product => product.id === newItem.id);
    if (check_index !== -1)
      newCart[check_index] = newItem;
    else 
      newCart.push(newItem);

    setCart([...newCart]);
  }

  const remove = (item: IItemCart): void => {
    let newCart: Array<IItemCart> = cart;

    if (item.amount <= 1) {
      newCart = cart.filter((i) => i.id !== item.id);
      toast("Item removido do carrinho");

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
      getProductList,
      totalValue,
      setTotalValue,
    }}>
      {children}
    </CartContext.Provider>
  );
}
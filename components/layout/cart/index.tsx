import type { NextPage } from 'next';
import React from 'react';
import { CartContext } from '../../../provider/cart';
import CartProducts from "./CartProducts";

const Cart: NextPage = () => {
  const {isOpen, setIsOpen} = React.useContext(CartContext);

  const classCartIsOpen = () => {
    return isOpen && "is-open"; 
  };

  const classBackgroundIsOpen = () => {
    return isOpen ? "fade-out display-none" : "fade-in" ; 
  };

  return <>
    <section className={`app-cart-modal main-shadow ${classCartIsOpen()}`}>
      <h2>Carrinho</h2>
      <CartProducts />
    </section>
    <div className={`background-modal ${classBackgroundIsOpen()}`} onClick={() => setIsOpen(!isOpen)}/>
  </>
}

export default Cart

import type { NextPage } from 'next';
import React from 'react';
import { CartContext } from '../../../provider/cart';
import CartProducts from "./CartProducts";
import Button from '../../shared/button';

const Cart: NextPage = () => {
  const {isOpen, setIsOpen, setCart, totalValue} = React.useContext(CartContext);

  const classCartIsOpen = () => {
  return isOpen && "is-open"; 
  };

  const classBackgroundIsOpen = () => {
    return isOpen ? "fade-out display-none" : "fade-in" ; 
  };

  return <>
    <section className={`app-cart-modal main-shadow ${classCartIsOpen()}`}>
      <div className='app-cart-modal__header-cart'>
        <h2>Carrinho</h2>
        <i onClick={() => setIsOpen(!isOpen)} className="fas fa-times"></i>
      </div>
      <CartProducts />
      <h2>R$ {totalValue},00</h2>
      <Button
        className="main"
        action={() => setCart([])}
        text="Finalizar compra"
      />
    </section>
    <div className={`background-modal ${classBackgroundIsOpen()}`} onClick={() => setIsOpen(!isOpen)}/>
  </>
}

export default Cart

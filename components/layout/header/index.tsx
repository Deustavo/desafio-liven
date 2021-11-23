import React from 'react';
import type { NextPage } from 'next';
import { CartContext } from '../../../provider/cart';

const Home: NextPage = () => {
  const {isOpen, setIsOpen} = React.useContext(CartContext);
  return <>
    <section className="app__header padding-page main-shadow">
      <h3>Loja Simples</h3>
      <p onClick={() => setIsOpen(!isOpen)}>Carrinho</p>
    </section>
  </>
}

export default Home

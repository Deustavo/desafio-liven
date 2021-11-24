import React from 'react';
import type { NextPage } from 'next';
import { CartContext } from '../../../provider/cart';

const Home: NextPage = () => {
  const {isOpen, setIsOpen, cart} = React.useContext(CartContext);
  return <>
    <section className="app__header padding-page main-shadow">
      <h3>Deustavo store</h3>
      <div className="app__header__cart-container">
        <p>({cart.length})</p>
        <i onClick={() => setIsOpen(!isOpen)} className="fas fa-shopping-cart" />
      </div>
    </section>
  </>
}

export default Home

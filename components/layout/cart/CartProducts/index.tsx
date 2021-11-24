import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { CartContext } from '../../../../provider/cart';
import CartProduct from './CartProduct';

const CartProducts: NextPage = () => {
  const { cart } = React.useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const cartIsEmpty = () => {
    return cart.length > 0
  }

  return <>
    <section className="app-cart-modal__container-products">
      { !cartIsEmpty() ? <p>Carrinho vazio</p> :
        cart.map(data => 
          <CartProduct key={data.id} data={data}/>
        )
      }
    </section>
  </>
}

export default CartProducts;

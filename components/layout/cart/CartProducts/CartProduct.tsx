import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { CartContext } from '../../../../provider/cart';
import Amount from '../../../shared/amount';

const CartProduct: NextPage = ({ data }) => {
  const { add, remove } = React.useContext(CartContext);

  const setAmount = (newAmount) => {
    if (newAmount > data.amount)
      return add(data, newAmount);

    return remove(data);
  }

  return <>
    <section className="app-cart-modal__container-products__item">
      <Image src={data.image} width={80} height={80} alt={data.name}/>
      <div className="app-cart-modal__container-products__item__description">
        <div className="app-cart-modal__container-products__item__text">
          <p>{data.name}</p>
          <p>{data.price}</p>
        </div>
        <Amount amount={data.amount} setAmount={setAmount}/>
      </div>
    </section>
  </>
}

export default CartProduct;

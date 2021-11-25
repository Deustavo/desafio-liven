import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { CartContext } from '../../../../provider/cart';
import Amount from '../../../shared/amount';
import { IDataItemCart } from '../../../../store/cart/types';

const CartProduct: NextPage<IDataItemCart> = ({ data }) => {
  const { add, remove } = React.useContext(CartContext);

  const setAmount = (newAmount: number) => {
    if (newAmount > data.amount)
      return add(data, newAmount);

    return remove(data);
  }

  return <>
    <section className="app-cart-modal__container-products__item">
      <Image src={data.image} width={80} height={80} alt={data.name}/>
      <div className="app-cart-modal__container-products__item__description">
        <div className="app-cart-modal__container-products__item__text">
          <b>{data.price}</b>
          <p>{data.name}</p>
        </div>
        <Amount amount={data.amount} setAmount={setAmount}/>
      </div>
    </section>
  </>
}

export default CartProduct;

import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { CartContext } from '../../../../provider/cart';
import Amount from '../../../shared/amount';

const CartProduct: NextPage = ({ data }) => {
  const {  } = React.useContext(CartContext);

  return <>
    <section className="">
      <Image src={data.image} width={200} height={200} alt={data.name}/>
      <div>
        <div>
          <p>{data.name}</p>
          <p>{data.price}</p>
        </div>
        <Amount amount={1}/>
      </div>
    </section>
  </>
}

export default CartProduct;

import React, { useState } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image';
import { CartContext } from '../../../../provider/cart';

import Amount from '../../../shared/amount';
import Button from '../../../shared/button';

const Product: NextPage = ({ data }) => {
  const { add } = React.useContext(CartContext);
  const [amount, setAmount] = useState(1);

  return <>
    <section className="app__home__product-list__item main-shadow">
      <Image src={data.image} width={200} height={200} alt={data.name}/>
      <div className="app__home__product-list__item__container-text">
        <p className="app__home__product-list__item-price">R$ {data.price}</p>
        <p className="app__home__product-list__item-name">{data.name}</p>
        <Amount amount={amount} setAmount={setAmount}/>
        <Button
          className="main"
          action={() => add(data, amount)}
          text="Adicionar ao carrinho"
        />
      </div>
    </section>
  </>
}

export default Product;

import React from 'react';
import { toast } from 'react-toastify';
import type { NextPage } from 'next'
import Image from 'next/image';
import { CartContext } from '../../../../provider/cart';
import Button from '../../../shared/button';

const Product: NextPage = ({ data }) => {
  const { add } = React.useContext(CartContext);

  const onAddProduct = () => {
    toast("Item adicionado ao carrinho!");
    add(data, 1);
  }

  return <>
    <section className="app__home__product-list__item main-shadow">
      <Image src={data.image} width={200} height={200} alt={data.name}/>
      <div className="app__home__product-list__item__container-text">
        <b className="app__home__product-list__item-price">R$ {data.price}</b>
        <p className="app__home__product-list__item-name">{data.name}</p>
        <Button
          className="main"
          action={() => onAddProduct()}
          text="Adicionar ao carrinho"
        />
      </div>
    </section>
  </>
}

export default Product;

import React from 'react';
import { toast } from 'react-toastify';
import type { NextPage } from 'next'
import Image from 'next/image';
import { CartContext } from '../../../../provider/cart';
import Button from '../../../shared/button';
import { IItemCart } from '../../../../store/cart/types';


const Product: NextPage<{data: IItemCart}> = ({ data }) => {
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
          action={() => onAddProduct()}
          className="main"
          text="Adicionar ao carrinho"
        />
      </div>
    </section>
  </>
}

export default Product;

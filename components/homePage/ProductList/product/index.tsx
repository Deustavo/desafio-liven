import type { NextPage } from 'next'
import Image from 'next/image';

import Amount from '../../../shared/amount';
import Button from '../../../shared/button';

const Product: NextPage = ({ data }) => {
  return <>
    <section className="app__home__product-list__item main-shadow">
      <Image src={data.image} width={100} height={100} alt={data.name}/>
      <div className="app__home__product-list__item__container-text">
        <p className="app__home__product-list__item-price">R$ {data.price}</p>
        <p className="app__home__product-list__item-name">{data.name}</p>
        <Amount amount={1} />
        <Button
          className="main"
          action={() => {}}
          text="Adicionar ao carrinho"
        />
      </div>
    </section>
  </>
}

export default Product;

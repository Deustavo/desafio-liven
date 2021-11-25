import type { NextPage } from 'next';
import { useEffect, useContext } from 'react';
import { CartContext } from '../../../provider/cart';

import api from '../../../services/api';
import Product from './product';

const ProductList: NextPage = () => {
  const { products, setProducts } = useContext(CartContext);

  const getProductList = async () => {
    const response = await api.get('product');
    
    if (response.status === 200)
      setProducts(response.data);
  }

  useEffect(() => {
    getProductList();
  }, []);

  return <>
    <section className="app__home__product-list">
      {
        products.length > 0 && products.map((product, index) =>
          <Product key={index} data={product}/>
        )
      }
    </section>
  </>
}

export default ProductList

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import api from '../../../services/api';
import Product from './product';

const ProductList: NextPage = () => {
  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    const response = await api.get('product');
    
    if (response.status === 200)
      setProductList(response.data);
  }

  useEffect(() => {
    console.log('aa');
    getProductList();
  }, []);

  return <>
    <section className="app__home__product-list">
      {
        productList.length > 0 && productList.map((product, index) =>
          <Product key={index} data={product}/>
        )
      }
    </section>
  </>
}

export default ProductList

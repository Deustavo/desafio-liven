import type { NextPage } from 'next'
import ProductList from '../components/homePage/ProductList';

const Home: NextPage = () => {
  return <>
    <section className="app__home padding-page padding-header">
      <h2>Produtos</h2>
      <ProductList />
    </section>
  </>
}

export default Home

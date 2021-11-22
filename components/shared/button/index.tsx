import type { NextPage } from 'next';

const Product: NextPage = ({ className, action, text }) => {
  return <>
    <button className={`app__button app__button__${className}`} onClick={() => action}>{text}</button>
  </>
}

export default Product;

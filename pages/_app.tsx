import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { ToastContainer } from "react-toastify";
import Header from '../components/layout/header';
import Cart from '../components/layout/cart';
import { CartProvider } from '../provider/cart';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CartProvider>
      <Header />
      <Cart />
      <Component {...pageProps} />
      <ToastContainer />
    </CartProvider>
  </>
}

export default MyApp

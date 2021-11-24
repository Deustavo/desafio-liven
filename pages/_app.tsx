import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Header from '../components/layout/header';
import Cart from '../components/layout/cart';
import { CartProvider } from '../provider/cart';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CartProvider>
      <Header />
      <Cart />
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </CartProvider>
  </>
}

export default MyApp

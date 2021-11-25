import type { NextPage } from 'next';
import { IButton } from '../../../store/button/types';

const Button: NextPage<IButton> = ({ className, action, text }) => {
  return <>
    <button className={`app__button app__button__${className}`} onClick={action}>{text}</button>
  </>
}

export default Button;

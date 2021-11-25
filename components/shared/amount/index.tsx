import type { NextPage } from 'next';
import { IAmount } from '../../../store/amount';

import Button from '../button';

const Amount: NextPage<IAmount> = ({ amount, setAmount }) => {
  const checkRemoveIsPositive = () => {
    if (amount > 0)
      return setAmount(amount - 1);
    
    return setAmount(0);
  }

  return <>
    <section className="app__amount">
      <Button
        className="danger app__button__amount"
        action={() => checkRemoveIsPositive()}
        text="-"
      />
      <span className="app__amount__text">{amount}</span>
      <Button
        className="main app__button__amount"
        action={() => setAmount(amount + 1)}
        text="+"
      />
    </section>
  </>
}

export default Amount;

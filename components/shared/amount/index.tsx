import type { NextPage } from 'next';

import Button from '../button';

const Amount: NextPage = ({ amount, setAmount }) => {
  const positiveAmount = () => {
    if (amount > 0)
      setAmount(amount - 1);
  }

  return <>
    <section className="app__amount">
      <Button
        className="danger"
        action={() => positiveAmount()}
        text="-"
      />
      <span className="app__amount__text">{amount}</span>
      <Button
        className="main"
        action={() => setAmount(amount + 1)}
        text="+"
      />
    </section>
  </>
}

export default Amount;

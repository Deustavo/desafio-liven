import type { NextPage } from 'next';

import Button from '../button';

const Amount: NextPage = ({ amount, setAmount }) => {
  return <>
    <section className="app__amount">
      <Button
        className="danger"
        action={() => setAmount(amount - 1)}
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

import type { NextPage } from 'next';

import Button from '../button';

const Amount: NextPage = ({ amount }) => {
  return <>
    <section className="app__amount">
      <Button
        className="danger"
        action={() => {}}
        text="-"
      />
      <span className="app__amount__text">{amount}</span>
      <Button
        className="main"
        action={() => {}}
        text="+"
      />
    </section>
  </>
}

export default Amount;

import React from 'react';
import { CartContext } from '../provider/cart';
import Home from '../pages/index';
import { cartContextDefaultValues } from '../__mocks__/cartContext';
import {render, screen} from '@testing-library/react';

function renderUserGreeter(value) {
  return render(
    <CartContext.Provider value={value}>
      <Home />
    </CartContext.Provider>
  );
}

describe("home", () => {
  it("Verificar lista de produtos do contexto", async () => {
    renderUserGreeter(cartContextDefaultValues);

    const productName = screen.getAllByText(/^Produto exemplo/);

    expect(productName.length).toBe(4);
  });
});


// TODO:
// estudar funcionamento do WSL

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// const server = setupServer(
//   rest.get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product', (req, res, ctx) => {
//     return res(ctx.json({data: dataProducts}));
//   }),
// );
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
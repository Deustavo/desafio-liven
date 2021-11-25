import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import Home from '../pages/index';
import { products } from '../__mocks__/products';

const server = setupServer(
  rest.get('https://5d6da1df777f670014036125.mockapi.io/api/v1/product', (req, res, ctx) => {
    // return res(ctx.json({greeting: 'hello there'}));
    console.log(ctx);
    return res(ctx.json({products: products}));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Carregar produtos da loja', async () => {
  const wrapper = render(<Home/>);
  // console.log(wrapper);
  // console.log(wrapper.debug());
});

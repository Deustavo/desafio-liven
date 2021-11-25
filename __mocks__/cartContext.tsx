import { ICartContext } from "../store/cart/types"

export const cartContextDefaultValues: ICartContext = {
  cart: [],
  setCart: () => {},
  isOpen: false,
  setIsOpen: () => {},
  add: () => {},
  remove: () => {},
  products: [
    {
      "id": "1",
      "createdAt": "2019-09-02T12:58:54.103Z",
      "name": "Produto exemplo",
      "price": "289.00",
      "image": "http://lorempixel.com/640/480/food",
      "stock": 65171,
      "amount": 0,
    }, {
      "id": "2",
      "createdAt": "2019-09-02T07:59:58.181Z",
      "name": "Produto exemplo",
      "price": "430.00",
      "image": "http://lorempixel.com/640/480/transport",
      "stock": 91260,
      "amount": 0,
    }, {
      "id": "3",
      "createdAt": "2019-09-02T22:14:05.454Z",
      "name": "Produto exemplo",
      "price": "993.00",
      "image": "http://lorempixel.com/640/480/sports",
      "stock": 36608,
      "amount": 0,
    }, {
      "id": "4",
      "createdAt": "2019-09-02T07:36:56.139Z",
      "name": "Produto exemplo",
      "price": "259.00",
      "image": "http://lorempixel.com/640/480/nightlife",
      "stock": 92065,
      "amount": 0,
    },
  ],
  setProducts: () => {},
  getProductList: () => {},
  totalValue: 0,
  setTotalValue: () => {},
};

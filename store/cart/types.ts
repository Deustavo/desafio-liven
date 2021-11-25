export interface IDataItemCart {
  data: {
    amount: number,
    createdAt: string,
    id: string,
    image: string,
    name: string,
    price: string,
    stock: number,
  }
}

export interface IItemCart {
  amount: number,
  createdAt: string,
  id: string,
  image: string,
  name: string,
  price: string,
  stock: number,
}

export interface ICartContext {
  cart: IItemCart[],
  setCart: (cart: IItemCart[]) => void
  isOpen: boolean,
  setIsOpen: (stata: boolean) => void,
  add: (data: IItemCart, amount: number) => void,
  remove: (data: IItemCart) => void,
  products: IItemCart[],
  setProducts: (data: IItemCart[]) => void
  getProductList: () => void,
  totalValue: number | undefined,
  setTotalValue: (value: number) => void,
}

export interface Product {
  id:number;
  title:string;
  img?:string;
}

export interface ProductContextProps {
  counter: number;
  increaseOrDecreaseCounterBy: (step:number) => void;
  product:Product;
}

export interface OnChangeArgs {
  product: Product,
  count: number
}

export interface ProductInCart extends Product {
  count: number;
}
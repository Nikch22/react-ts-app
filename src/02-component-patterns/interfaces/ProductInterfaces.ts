
export interface Product {
  id:number;
  title:string;
  img?:string;
}

export interface ProductContextProps {
  counter: number;
  count?: number;
  maxCount?: number;
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

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product:Product;
  increaseOrDecreaseCounterBy: ( step:number ) => void;
  reset: () => void;

}
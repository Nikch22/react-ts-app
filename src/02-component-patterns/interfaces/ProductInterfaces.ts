import { ReactElement } from "react";

export interface ProductCardProps {
  product:Product;
  children?:ReactElement | ReactElement[];
}

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
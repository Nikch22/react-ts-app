import { createContext, CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, OnChangeArgs } from '../interfaces/ProductInterfaces';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export interface Props {
  product:Product;
  children?:ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: ( args:OnChangeArgs ) => void;
}


export const ProductCard = ( { children, product, className, style, onChange, value }:Props ) => {

const { counter, increaseOrDecreaseCounterBy } = useProduct( { product, onChange, value  } );

  return (
    <Provider value={{ 
      counter, 
      increaseOrDecreaseCounterBy, 
      product }}>
        
      <div className={ `${styles.productCard} ${className}`} style={ style } >

        { children }

      </div>
    </Provider>
  )
}

import { createContext, CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/ProductInterfaces';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export interface Props {
  product:Product;
  children?:ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}


export const ProductCard = ( { children, product, className, style }:Props ) => {

const { counter, increaseOrDecreaseCounterBy } = useProduct();

  return (
    <Provider value={{ counter, increaseOrDecreaseCounterBy, product }}>
      <div className={ `${styles.productCard} ${className}`} style={ style } >

        {children}

        {/* <ProductImage img={ product.img }/>

        <ProductTitle title={ product.title }/>

        <ProductButtons counter={ counter } increaseOrDecreaseCounterBy={ increaseOrDecreaseCounterBy }/> */}

      </div>
    </Provider>
  )
}

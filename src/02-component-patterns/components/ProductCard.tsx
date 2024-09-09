import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/ProductInterfaces';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;



export const ProductCard = ( { children, product }:ProductCardProps ) => {

const { counter, increaseOrDecreaseCounterBy } = useProduct();

  return (
    <Provider value={{ counter, increaseOrDecreaseCounterBy, product }}>
      <div className={ styles.productCard } >

        {children}

        {/* <ProductImage img={ product.img }/>

        <ProductTitle title={ product.title }/>

        <ProductButtons counter={ counter } increaseOrDecreaseCounterBy={ increaseOrDecreaseCounterBy }/> */}

      </div>
    </Provider>
  )
}

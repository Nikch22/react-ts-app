import { createContext, CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, OnChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/ProductInterfaces';


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;


export interface Props {
  product:Product;
  // children?:ReactElement | ReactElement[];
  children: ( args: ProductCardHandlers ) =>  JSX.Element;
  className?: string;
  style?: CSSProperties;
  initialValues: InitialValues;
  value?: number;
  onChange?: ( args:OnChangeArgs ) => void;
}


export const ProductCard = ( { 
  children, 
  product, 
  className, 
  style, 
  onChange, 
  value,
  initialValues 
}: Props ) => {

const { counter, isMaxCountReached, increaseOrDecreaseCounterBy, reset } = useProduct( { product, onChange, value, initialValues  } );

  return (
    <Provider value={{ 
      counter,
      ...initialValues,
      increaseOrDecreaseCounterBy, 
      product }}>
        
      <div className={ `${styles.productCard} ${className}`} style={ style } >

        { 
          children( { 
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount, 
            product: product,
            increaseOrDecreaseCounterBy: increaseOrDecreaseCounterBy, 
            reset: reset
          } ) 
        }

      </div>
    </Provider>
  )
}

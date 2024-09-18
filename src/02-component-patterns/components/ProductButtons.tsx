import styles from '../styles/styles.module.css';
import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";


export const ProductButtons = ( { className, style }: { className?: string, style?: CSSProperties; } ) => {

  const { counter, count, maxCount, increaseOrDecreaseCounterBy } = useContext( ProductContext );

  const isMaxReached = useCallback(
    () => ( counter === maxCount ) ?? false ,
    [ counter, count, maxCount ],
  );

  return (
    <div className={ `${styles.buttonsContainer} ${className}` } style={ style } >
    <button className={ styles.buttonMinus }
    onClick={ () => increaseOrDecreaseCounterBy( -1 ) }>-</button>

    <div className={ styles.countLabel }>{ counter }</div>

    <button className={ `${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }` }
    onClick={ () => increaseOrDecreaseCounterBy( +1 ) }>+</button>
    
  </div>
  )
}

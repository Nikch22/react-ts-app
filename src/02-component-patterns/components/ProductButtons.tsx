import styles from '../styles/styles.module.css';
import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";


export const ProductButtons = ( { className, style }: { className?: string, style?: CSSProperties; } ) => {

  const { counter, increaseOrDecreaseCounterBy } = useContext( ProductContext );

  return (
    <div className={ `${styles.buttonsContainer} ${className}` } style={ style } >
    <button className={ styles.buttonMinus }
    onClick={ () => increaseOrDecreaseCounterBy(-1) }>-</button>
    <div className={ styles.countLabel }>{ counter }</div>
    <button className={ styles.buttonAdd }
    onClick={ () => increaseOrDecreaseCounterBy(1) }>+</button>
  </div>
  )
}

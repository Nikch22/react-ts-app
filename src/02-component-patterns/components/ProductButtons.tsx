import styles from '../styles/styles.module.css';
import { useContext } from "react";
import { ProductContext } from "./ProductCard";


export const ProductButtons = () => {

  const { counter, increaseOrDecreaseCounterBy } = useContext( ProductContext );

  return (
    <div className={ styles.buttonsContainer }>
    <button className={ styles.buttonMinus }
    onClick={ () => increaseOrDecreaseCounterBy(-1) }>-</button>
    <div className={ styles.countLabel }>{ counter }</div>
    <button className={ styles.buttonAdd }
    onClick={ () => increaseOrDecreaseCounterBy(1) }>+</button>
  </div>
  )
}

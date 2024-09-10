import { useEffect, useState } from "react";
import { OnChangeArgs, Product } from '../interfaces/ProductInterfaces';


export interface useProductArgs {
  product: Product,
  onChange?: ( args:OnChangeArgs ) => void,
  value?: number
}

export const useProduct = ( { product, onChange, value = 0 }: useProductArgs ) => {

  const [counter, setCounter] = useState(value);
  
  const increaseOrDecreaseCounterBy = ( step:number ):void => {

    const newValue = Math.max( counter + step, 0 );
    
    setCounter( newValue );
    
    onChange && onChange( { product, count: newValue } );
    
  }
  

  useEffect(() => {
    setCounter(value);
  }, [value])
  
  
  return {
    counter,
    increaseOrDecreaseCounterBy,
  }

}
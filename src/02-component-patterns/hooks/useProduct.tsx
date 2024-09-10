import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from '../interfaces/ProductInterfaces';


export interface useProductArgs {
  product: Product,
  onChange?: ( args:OnChangeArgs ) => void,
  value?: number
}

export const useProduct = ( { product, onChange, value = 0 }: useProductArgs ) => {

  const [counter, setCounter] = useState(value);

  const isControlled = useRef( !!onChange );

  
  const increaseOrDecreaseCounterBy = ( step:number ):void => {

    if( isControlled.current ) return onChange!({ count: step, product });

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
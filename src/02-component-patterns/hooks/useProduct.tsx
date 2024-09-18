import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from '../interfaces/ProductInterfaces';


export interface useProductArgs {
  product: Product,
  onChange?: ( args:OnChangeArgs ) => void,
  value?: number,
  initialValues?: InitialValues;
}

export const useProduct = ( { product, onChange, value = 0, initialValues }: useProductArgs ) => {

  const [counter, setCounter] = useState<number>( initialValues?.count || value );
  
  const isMounted = useRef(false);
  
  const increaseOrDecreaseCounterBy = ( step:number ):void => {

    const newValue = Math.min(Math.max(counter + step, 0), initialValues?.maxCount ?? Infinity);

    setCounter( newValue );
    
    onChange && onChange( { product, count: newValue } );
    
  }

  const reset = () => {
    setCounter( initialValues?.count || value  );
  }
  

  useEffect(() => {
    //? Si es la primera vez que se monta el componente que no haga el set
    //? para que no sobreescriba el initialValue con 0
    if (!isMounted.current) return;
    
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, [])
  
  
  
  return {
    counter,
    isMaxCountReached: ( counter === initialValues?.maxCount ) ?? false,
    increaseOrDecreaseCounterBy,
    reset
  }

}
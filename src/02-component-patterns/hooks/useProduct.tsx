import { useState } from "react";


export const useProduct = () => {

  const [counter, setCounter] = useState(0);

  const increaseOrDecreaseCounterBy = ( step:number ):void => {
    setCounter( prev => Math.max(prev + step, 0));
  }


  return {
    counter,
    increaseOrDecreaseCounterBy,
  }

}
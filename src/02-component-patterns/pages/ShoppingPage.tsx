import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom.styles.css";
import { products } from "../data/products";



const product = products[0];


export const ShoppingPage = () => {


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
      key={product.id}
      product={product}
      className="bg-dark"
      initialValues= { {
        count: 4,
        maxCount: 10
      } }
      >

      {
        ( { reset, increaseOrDecreaseCounterBy, isMaxCountReached, count} ) => (

          <>
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-button" />

            <button onClick={ reset }>Reset</button>

            <button onClick={ () => increaseOrDecreaseCounterBy(-2) }>-2</button>
            {!isMaxCountReached && <button onClick={ () => increaseOrDecreaseCounterBy(+2) }>+2</button>}
            <span className="text-white text-bold">{ count }</span>

          </>
          
          )
        }

        </ProductCard>


    </div>
  );
};

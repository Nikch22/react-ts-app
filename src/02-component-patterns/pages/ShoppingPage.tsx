import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom.styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";



export const ShoppingPage = () => {


  const { shoppingCart, onProductCartChange } = useShoppingCart();


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* <ProductCard product={ product } className='bg-dark' >
        <ProductCard.Image className='custom-image' />
        <ProductCard.Title className='text-white text-bold' />
        <ProductCard.Buttons className="custom-button" />
      </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCartChange}
            value={ shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-button" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        
        {

          Object.entries(shoppingCart).map(( [ key, product ] ) => (

              <ProductCard
                key={ key }
                product={ product }
                className="bg-dark"
                style={{ width: "100px" }}
                value={ product.count }
                onChange={ onProductCartChange }
              >

                <ProductImage
                  className="custom-image"
                  style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                />
                <ProductButtons 
                  className="custom-button"
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                />
                  
              </ProductCard>
              
            ))

        }

      </div>
    </div>
  );
};

import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';



export * from "./ProductButtons";

export * from "./ProductImage";

export * from "./ProductTitle";



export const ProductCard = Object.assign( ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle ,
  Buttons: ProductButtons,
});

export default ProductCard;
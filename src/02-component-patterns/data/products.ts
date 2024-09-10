import { Product } from "../interfaces/ProductInterfaces";

const product = {
  id: 1,
  title: "Mug",
  img: "./coffee-mug.png",
};

const product2 = {
  id: 2,
  title: "Mug 2",
  img: "./coffee-mug2.png",
};

export const products: Product[] = [product, product2];
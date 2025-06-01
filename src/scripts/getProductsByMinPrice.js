import { readProducts } from '../utils/readProducts.js';

const getProductsByMinPrice = async (minPrice) => {
  try {
    const products = await readProducts();
    const filtered = products.filter((product) => product.price <= minPrice);
    return filtered;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getProductsByMinPrice(100));

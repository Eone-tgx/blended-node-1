import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const modifyProducts = async () => {
  try {
    const products = await readProducts();
    const modifiedProducts = products.map(({ description, ...rest }) => rest);
    await writeProducts(modifiedProducts);
  } catch (error) {
    console.log(error);
  }
};

modifyProducts();

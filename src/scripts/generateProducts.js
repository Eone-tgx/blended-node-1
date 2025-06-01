import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const generateProducts = async (number) => {
  try {
    const existingProducts = await readProducts();
    const newProducts = Array.from({ length: number }, () =>
      createFakeProduct(),
    );
    const updatedProducts = [...existingProducts, ...newProducts];
    await writeProducts(updatedProducts);
  } catch (error) {
    console.log(error);
  }
};

generateProducts(5);

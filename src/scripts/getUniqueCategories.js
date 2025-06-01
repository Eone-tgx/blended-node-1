import { readProducts } from '../utils/readProducts.js';

const getUniqueCategories = async () => {
  try {
    const products = await readProducts();
    const categories = products.map((product) => product.category);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getUniqueCategories());

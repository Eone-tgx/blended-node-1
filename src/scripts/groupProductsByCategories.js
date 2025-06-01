import { readProducts } from '../utils/readProducts.js';

const groupProductsByCategories = async () => {
  try {
    const products = await readProducts();

    const grouped = products.reduce((acc, product) => {
      const category = product.category || 'без категорії';

      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product.name);
      return acc;
    }, {});

    return grouped;
  } catch (error) {
    console.log(error);
  }
};

console.log(await groupProductsByCategories());

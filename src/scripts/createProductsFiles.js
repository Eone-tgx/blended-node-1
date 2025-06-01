import fs from 'fs/promises';
import { PATH_FILES_DIR } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';
import path from 'path';

const formatFileName = (name) =>
  name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '') + '.json';

export const createProductsFiles = async () => {
  try {
    const products = await readProducts();
    for (const product of products) {
      const fileName = formatFileName(product.name);
      const filePath = path.join(PATH_FILES_DIR, fileName);

      await fs.writeFile(filePath, JSON.stringify(product, null, 2), 'utf-8');
    }
  } catch (error) {
    console.log(error);
  }
};

createProductsFiles();

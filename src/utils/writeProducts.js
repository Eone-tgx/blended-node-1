import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const writeProducts = async (updatedProducts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedProducts), 'utf-8');
  } catch (error) {
    console.log(error);
  }
};

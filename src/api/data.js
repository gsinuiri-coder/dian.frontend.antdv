import { categories, products } from "./db.json";

const _categories = categories;
const _products = products;

export const asyncGetCategories = () => {
  return _categories;
};

export const asyncGetProducts = () => {
  return _products;
};

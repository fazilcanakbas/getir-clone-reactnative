import { Category } from './src/models';
import { Product } from './src/models';
export type RootParamList = {
  Home: undefined;
  CategoryDetails: { Category: Category }; 
  ProductDetails: { product: Product }; 
};

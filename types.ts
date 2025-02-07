import { Category } from './src/models';

export type RootParamList = {
  Home: undefined;
  CategoryDetails: { Category: Category }; // 'Category' ile tanımlı olmalı
  // Diğer ekranlar...
};

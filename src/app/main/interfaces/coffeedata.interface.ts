export interface Category{
  category: string;
  categoryId: string;
  subCategories: SubCategory[];
}

export interface SubCategory{
  subCategoryName: string;
  subCategoryId: string;
  subCategoryProducts: SubCategoryProduct[];
}

export interface SubCategoryProduct{
  groupName: string;
  products: Product[];
}

export interface Product{
  name: string;
  id: string;
}
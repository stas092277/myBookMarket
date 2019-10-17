export interface Categ {
  name: string;
  goods: Product[];
}

export interface Product {
  name: string;
  author?: string;
  pictureUrl: string;
}

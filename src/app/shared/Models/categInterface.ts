export interface Group {
  id: number;
  nameGroup: string;
  productList: Product[];
}

export interface Product {
  name: string;
  author?: string;
  pictureUrl: string;
  category: Categ;
}

export interface Categ {
  id: number;
  name: string;
}

export interface Topic {
  name: string;
  goods: Product[];
}

export interface Product {
  name: string;
  author: string;
  pictureUrl: string;
}

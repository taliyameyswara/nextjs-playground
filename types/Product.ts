export interface Product {
  id: number;
  title: string;
  description?: string;
  images: string;
  price: number;
  discountPrice?: number;
}

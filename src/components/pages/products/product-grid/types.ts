export type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  discount_price?: number;
  inr_price?: number;
  inr_discount_price?: number;
  affiliate_commission?: number;
  thumbnail?: Media;
  category?: Category[];
  tags?: Tag[];
  screenshots?: string[];
  demo_urls?: string[];
  createdAt: string;
  updatedAt: string;
};

export type Media = {
  id: string;
  url: string;
  filename: string;
  alt: string;
};

export type Category = {
  id: string;
  title: string;
  slug: string;
};

export type Tag = {
  id: string;
  name: string;
};

export type ProductCardProps = {
  product: Product;
  country: string;
};

export type ProductGridProps =  {
  products: Product[];
  country: string;
};

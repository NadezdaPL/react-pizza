export type CartItem = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  type: string,
  size: number,
  count: number,
};

export interface cartSliceState {
  totalPrice: number;
  items: CartItem[];
}

import type { Product } from './product.type';

export type CartItem = {
	item: Product;
	quantity: number;
};

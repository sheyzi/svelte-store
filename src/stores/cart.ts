import { writable } from 'svelte/store';
import type { CartItem } from '../types/cartItem.type';
import type { Product } from '../types/product.type';
import { browser } from '$app/env';

export const cart = writable<CartItem[]>([]);

export const addItem = (item: Product) => {
	cart.update((items) => {
		const newItems = [...items];
		const itemInStore = newItems.find((i) => i.item.id === item.id);
		if (itemInStore) {
			itemInStore.quantity++;
		} else {
			newItems.push({ item, quantity: 1 });
		}
		if (!browser) {
			throw new Error('Browser not found');
		}
		localStorage.setItem('cart', JSON.stringify(newItems));
		return newItems;
	});
};

export const removeItem = (item: Product) => {
	cart.update((items) => {
		const newItems = [...items];
		const itemInStore = newItems.find((i) => i.item.id === item.id);
		if (itemInStore) {
			if (itemInStore.quantity > 1) {
				itemInStore.quantity--;
			} else {
				newItems.splice(newItems.indexOf(itemInStore), 1);
			}
		}
		if (!browser) {
			throw new Error('Browser not found');
		}
		localStorage.setItem('cart', JSON.stringify(newItems));
		return newItems;
	});
};

export const initializeCart = () => {
	if (browser) {
		const items = localStorage.getItem('cart');
		if (items) {
			cart.set(JSON.parse(items));
		}
	}
};

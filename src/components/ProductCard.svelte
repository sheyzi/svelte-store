<script lang="ts">
	import type { Product } from '../types/product.type';
	import { addItem } from '../stores/cart';

	export let product: Product;
</script>

<!-- Create Product Card -->
<div class=" shadow-md rounded">
	<div class="w-[100%] rounded h-56 img-container">
		<a href={`/products/${product.id}`}>
			<img
				src={product.image}
				class="object-cover product-img rounded-t h-[100%] w-[100%]"
				alt=""
			/>
		</a>
	</div>
	<div class="mt-3 p-3">
		<a href={`/products/${product.id}`}>
			<h1 class="font-bold text-lg text-gray-700">{product.name}</h1>
		</a>
		<p class="text-gray-700 font-bold text-sm">&#8358;{product.price}</p>

		<button
			on:click={() => addItem(product)}
			class="w-[100%] mt-5 bg-gray-700 text-white px-3 py-2 font-bold rounded hover:bg-gray-900"
			>Add to cart</button
		>
	</div>
</div>

<style>
	.img-container {
		width: 100%;
		background-color: black;
		overflow: hidden;
		position: relative;
	}

	.product-img {
		transition: all 0.3s ease-in-out;
		filter: brightness(0.8);
	}

	.product-img:hover {
		transform: scale(1.1);
	}
</style>

<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';
	import ProductCard from '../components/ProductCard.svelte';
	import type { Product } from '../types/product.type';

	let products: Product[];

	const getProducts = () => {
		axios
			.get('http://localhost:8000/products')
			.then((res) => {
				setTimeout(() => {
					products = res.data;
				}, 500);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	onMount(() => {
		getProducts();
	});
</script>

<svelte:head>
	<title>Svelte Store</title>
</svelte:head>

<div class=" max-w-4xl mx-auto my-10">
	<h1 class="text-3xl font-bold text-gray-700">Products</h1>
	<div class="mt-7">
		{#if products}
			<div class="grid grid-cols-3 gap-10">
				{#each products as product}
					<ProductCard {product} />
				{/each}
			</div>
		{:else}
			<div class="flex items-center justify-center loading-container">
				<div class="" title="3">
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						width="24px"
						height="24px"
						viewBox="0 0 24 24"
						style="enable-background:new 0 0 50 50;"
						xml:space="preserve"
					>
						<rect x="0" y="0" width="4" height="7" fill="#333">
							<animateTransform
								attributeType="xml"
								attributeName="transform"
								type="scale"
								values="1,1; 1,3; 1,1"
								begin="0s"
								dur="0.6s"
								repeatCount="indefinite"
							/>
						</rect>

						<rect x="10" y="0" width="4" height="7" fill="#333">
							<animateTransform
								attributeType="xml"
								attributeName="transform"
								type="scale"
								values="1,1; 1,3; 1,1"
								begin="0.2s"
								dur="0.6s"
								repeatCount="indefinite"
							/>
						</rect>
						<rect x="20" y="0" width="4" height="7" fill="#333">
							<animateTransform
								attributeType="xml"
								attributeName="transform"
								type="scale"
								values="1,1; 1,3; 1,1"
								begin="0.4s"
								dur="0.6s"
								repeatCount="indefinite"
							/>
						</rect>
					</svg>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.loading-container {
		height: calc(100vh - 200px);
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import type { Product } from '../../types/product.type';
	import { addItem } from '../../stores/cart';

	let product: Product;

	onMount(() => {
		axios
			.get(`http://localhost:8000/products/${$page.params.id}`)
			.then((res) => {
				setTimeout(() => {
					product = res.data;
				}, 500);
			})
			.catch((err) => {
				console.log(err);
			});
	});
</script>

<svelte:head>
	{#if product}
		<title>{product.name}</title>
	{:else}
		<title>Product Page</title>
	{/if}
</svelte:head>
<div class="max-w-5xl mx-auto my-10 px-10">
	{#if product}
		<div class="flex space-x-6">
			<div class="h-[500px] w-[500px] rounded overflow-hidden">
				<img
					src={product.image}
					class="w-[100%] rounded product-img h-[100%] object-cover"
					alt=""
				/>
			</div>
			<div class="w-[500px]">
				<h1 class="text-3xl font-bold">{product.name}</h1>
				<p class="my-3">{product.description}</p>
				<p class="font-bold">&#8358;{product.price}</p>
				<button
					class="bg-gray-700 text-white px-3 py-2 rounded my-4"
					on:click={() => addItem(product)}>Add to cart</button
				>
			</div>
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

<style>
	.product-img {
		transition: all 0.3s ease-in-out;
	}

	.product-img:hover {
		transform: scale(1.1);
	}

	.loading-container {
		height: calc(100vh - 200px);
	}
</style>

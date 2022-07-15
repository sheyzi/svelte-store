<script lang="ts">
	import { addItem, cart, removeItem } from '../stores/cart';
	import { flip } from 'svelte/animate';
	import { scale } from 'svelte/transition';

	let totalPrice = 0;
	$: {
		let sum = 0;
		$cart.forEach((item) => {
			sum += item.item.price * item.quantity;
		});
		totalPrice = sum;
	}
</script>

<svelte:head>
	<title>Cart</title>
</svelte:head>

<div class="max-w-4xl mx-auto my-10">
	<h1 class="text-3xl font-bold text-gray-700">Cart</h1>
	<div>
		{#each $cart as cartItem (cartItem.item.id)}
			<div
				animate:flip
				in:scale={{ start: 0.5 }}
				class="flex my-5 items-center shadow p-2 rounded justify-between"
			>
				<div class="flex items-center">
					<img src={cartItem.item.image} width="65" alt="" />
					<div class="flex flex-col ml-5">
						<h1 class="font-bold">{cartItem.item.name}</h1>
						<p class="text-sm">
							{cartItem.quantity} * &#8358;{cartItem.item.price} = {cartItem.quantity *
								cartItem.item.price}
						</p>
					</div>
				</div>
				<div class="flex space-x-5">
					<button
						on:click={() => addItem(cartItem.item)}
						class="bg-gray-700 w-10 h-10 text-white rounded-full">+</button
					>
					<button
						on:click={() => removeItem(cartItem.item)}
						class="bg-red-500 w-10 h-10 text-white rounded-full">-</button
					>
				</div>
			</div>
		{/each}
		<div class="flex justify-end items-center w-[100%] mt-5">
			<p class="text-gray-700 text-right font-bold">Total: &#8358;{totalPrice}</p>
		</div>
	</div>
</div>

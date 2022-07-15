<script lang="ts">
	import { cart } from '../stores/cart';

	let quantity = 0;

	$: {
		let total = 0;
		$cart.forEach((item) => {
			total += item.quantity;
		});
		quantity = total;
	}
</script>

<div class="bg-gray-200 px-10 py-2">
	<div class="flex  items-center justify-between max-w-5xl mx-auto">
		<!-- Logo -->
		<div>
			<a href="/" class="text-2xl font-bold text-gray-700">Svelte Store</a>
		</div>
		<!-- Primary Navbar -->
		<div>
			<nav class="flex items-center space-x-10">
				<a href="/" class="font-bold  hover:border-b-4 border-blue-500">Home</a>
				<a href="/about" class="font-bold  hover:border-b-4 border-blue-500">About</a>
				<a href="/cart" class="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded"
					>Cart (<span class="font-bold">{quantity}</span>)</a
				>
			</nav>
		</div>
	</div>
</div>

<script>
	import Navbar from '../components/Navbar.svelte';

	import '../app.css';
	import { onMount } from 'svelte';
	import { initializeCart } from '../stores/cart';

	onMount(() => {
		initializeCart();
	});
</script>

<Navbar />
<slot />

<script>
	import AccesibilityMenu from './AccesibilityMenu.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col h-auto">
	<Header />

	<main class="w-full h-auto">
		<slot />
	</main>

	<AccesibilityMenu />

	<footer />
</div>

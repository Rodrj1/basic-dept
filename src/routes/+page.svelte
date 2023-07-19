<script lang="ts">
	import Content from './Content.svelte';
	import Footer from './Footer.svelte';
	import Main from './Main.svelte';

	import { headerStyle } from '../store';
	import { onMount } from 'svelte';

	let scrollValue: number = 0;

	onMount(() => {
		document.addEventListener('scroll', () => {
			if (scrollValue < 800) {
				headerStyle.set('bg-transparent text-white');
			} else if (scrollValue >= 800 && scrollValue < 3566) {
				headerStyle.set('bg-[#f4f4f4] text-black');
			} else if (scrollValue >= 3566 && scrollValue <= 4667) {
				headerStyle.set('bg-[#272624] text-[#f9cdcd]');
			} else {
				headerStyle.set('bg-[#f4f4f4] text-black');
			}
		});
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-12/12 bg-[#f4f4f4]">
	<Main />

	<Content {scrollValue} />

	<Footer />
</section>

<svelte:window bind:scrollY={scrollValue} />

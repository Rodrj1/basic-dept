<script lang="ts">
	import Content from './Content.svelte';
	import Main from './Main.svelte';

	import { headerStyle, scrollValue } from '../store';
	import { onMount } from 'svelte';

	onMount(() => {
		let header = document.getElementById('header');
		document.addEventListener('scroll', () => {
			let hasOpacity = header?.classList.contains('opacity-0');
			if ($scrollValue < 800) {
				if (hasOpacity) headerStyle.set('group bg-transparent text-white opacity-0');
				else headerStyle.set('group bg-transparent text-white opacity-100');
			} else if ($scrollValue >= 800 && $scrollValue < 3519) {
				if (hasOpacity) headerStyle.set('group bg-[#f4f4f4] text-black opacity-0');
				else headerStyle.set('group bg-[#f4f4f4] text-black opacity-100');
			} else if ($scrollValue >= 3519 && $scrollValue <= 4610) {
				if (hasOpacity) headerStyle.set('group bg-[#252422ff] text-[#f9cdcd] opacity-0');
				else headerStyle.set('group bg-[#252422ff] text-[#f9cdcd]  opacity-100');
			} else {
				if (hasOpacity) headerStyle.set('group bg-[#f4f4f4] text-black opacity-0');
				else headerStyle.set('group bg-[#f4f4f4] text-black opacity-100');
			}
		});
	});
</script>

<svelte:head>
	<title>BASIC/DEPT® | Digital Branding & Product Design Agency</title>
	<meta name="description" content="Website trying to recreate BASIC/DEPT" />
</svelte:head>

<section class="w-12/12">
	<Main />

	<Content />
</section>

<svelte:window bind:scrollY={$scrollValue} />

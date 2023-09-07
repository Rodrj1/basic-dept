<script lang="ts">
	import { ADHDFriendlyMode } from '../store';

	import AccesibilityMenu from './AccesibilityMenu.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import './styles.css';
	import { onMount } from 'svelte';

	let firstOpacity: HTMLElement | null;
	let secondOpacity: HTMLElement | null;

	onMount(() => {
		firstOpacity = document.getElementById('firstOpacity');
		secondOpacity = document.getElementById('secondOpacity');
	});

	const updatePosition = (
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		if (firstOpacity && secondOpacity) {
			let mouseY = event.clientY - 60;
			let windowHeight = window.innerHeight;

			firstOpacity.style.height = mouseY + 'px';
			secondOpacity.style.height = windowHeight - mouseY - 120 + 'px';
		}
	};

	import { page } from '$app/stores';
	import ProjectCollection from './ProjectCollection.svelte';
</script>

<div
	on:mousemove={$ADHDFriendlyMode ? updatePosition : null}
	id="status"
	role="status"
	class={`flex flex-col h-auto 
	${$page.url.pathname === '/' && 'bg-[#f4f4f4]'}
	${$page.url.pathname === '/work' && 'bg-[#f4f4f4]'}
	${$page.url.pathname === '/about' && 'bg-[#252422ff]'}
	${$page.url.pathname === '/news' && 'bg-[#f4f4f4]'}
	${$page.url.pathname === '/thinking' && 'bg-[#252422ff]'}
	${$page.url.pathname === '/careers' && 'bg-[#252422ff]'}
	${$page.url.pathname === '/contact' && 'bg-[#f4f4f4]'}
	`}
>
	<Header />

	<main class="w-full h-auto">
		<slot />
	</main>

	{#if $ADHDFriendlyMode}
		<div id="firstOpacity" class={`bg-black bg-opacity-40 w-full fixed z-[60000] top-0`} />

		<div id="secondOpacity" class={`bg-black bg-opacity-40 w-full fixed z-[50000] bottom-0`} />
	{/if}

	<AccesibilityMenu />

	<ProjectCollection />

	<Footer />
</div>

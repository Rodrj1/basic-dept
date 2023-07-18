<script lang="ts">
	import AccesibilityMenu from './AccesibilityMenu.svelte';
	import Header from './Header.svelte';
	import './styles.css';

	import { ADHDFriendlyMode } from '../store';

	const updatePosition = (
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) => {
		let firstOpacity = document.getElementById('firstOpacity');
		let secondOpacity = document.getElementById('secondOpacity');

		if (firstOpacity && secondOpacity) {
			let mouseY = event.clientY - 60;
			let windowHeight = window.innerHeight;

			firstOpacity.style.height = mouseY + 'px';
			secondOpacity.style.height = windowHeight - mouseY - 120 + 'px';
		}
	};
</script>

<div
	on:mousemove={ADHDFriendlyMode ? updatePosition : null}
	id="status"
	role="status"
	class="flex flex-col h-auto"
>
	<Header />

	<main class="w-full h-auto">
		<slot />
	</main>

	<div id="top" class="fixed top-0 w-full" />

	{#if $ADHDFriendlyMode}
		<div id="firstOpacity" class={`bg-black bg-opacity-40 w-full fixed z-[60000] top-0`} />

		<div id="secondOpacity" class={`bg-black bg-opacity-40 w-full fixed z-[50000] bottom-0`} />
	{/if}

	<AccesibilityMenu />
</div>

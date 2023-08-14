<script>
	import { onMount } from 'svelte';
	import { projectColletionIsOpen } from '../store';

	onMount(() => {
		const projectCollectionSection = document.getElementById('projectCollectionSection');

		const projectCollectionHandlerHeader = document.getElementById(
			'projectCollectionHandlerHeader'
		);

		const handleProjectCollection = () => {
			if (projectCollectionSection) {
				projectCollectionSection.classList.add('opacity-100', 'translate-x-0');
				projectCollectionSection.classList.remove('opacity-0', 'translate-x-full');

				$projectColletionIsOpen = true;
			}
		};

		if (projectCollectionHandlerHeader)
			projectCollectionHandlerHeader.addEventListener('click', handleProjectCollection);
	});
</script>

<button id="projectCollectionHandlerHeader">
	<figure>
		<svg
			class="cursor-pointer"
			xmlns="http://www.w3.org/2000/svg"
			width="37"
			height="37"
			viewBox="0 0 20 20"
			><path
				fill="currentColor"
				d="M14 10.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-5 0a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z"
			/></svg
		>
	</figure>
</button>

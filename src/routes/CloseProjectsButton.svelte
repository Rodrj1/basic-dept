<script>
	import { onMount } from 'svelte';
	import { projectColletionIsOpen } from '../store';

	onMount(() => {
		const projectCollectionSection = document.getElementById('projectCollectionSection');

		const projectCollectionHandler = document.getElementById(
			'projectCollectionHandler'
		);

		const handleProjectCollection = () => {
			if (projectCollectionSection) {
				projectCollectionSection.classList.remove('opacity-100', 'translate-x-0');
				projectCollectionSection.classList.add('opacity-0', 'translate-x-full');

				$projectColletionIsOpen = false;
			}
		};

		if (projectCollectionHandler)
		projectCollectionHandler.addEventListener('click', handleProjectCollection);
	});
</script>

<button id="projectCollectionHandler" class=" flex-[1.2] absolute top-9 right-24 text-[#f4f4f4] cursor-pointer">
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

<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { onMount } from 'svelte';
	import Project from '../components/Project.svelte';
	import CloseProjectsButton from './CloseProjectsButton.svelte';

	let isDragging = false;

	onMount(() => {
		const projectCollection = document.getElementById('projectCollection');

		if (projectCollection) {
			// Relate to drag events

			const dragStart = () => {
				isDragging = true;
				projectCollection.classList.add('dragging');

				const getProjects = document.querySelectorAll('.project');

				getProjects.forEach((project) => project.classList.add('removePointerEvents'));
			};

			const onDrag = (e: any) => {
				if (!isDragging) return;
				projectCollection.scrollLeft -= e.movementX;
			};

			const dragStop = () => {
				isDragging = false;
				projectCollection.classList.remove('dragging');

				const getProjects = document.querySelectorAll('.project');

				getProjects.forEach((project) => project.classList.remove('removePointerEvents'));
			};

			projectCollection.addEventListener('mousedown', dragStart);

			projectCollection.addEventListener('mousemove', onDrag);

			document.addEventListener('mouseup', dragStop);
		}
	});
</script>

<div
	id="projectCollectionSection"
	class="hidden xl:flex xl:flex-col justify-start fixed h-[100vh] bg-[#262420] w-full items-start pt-9 z-[100] top-0 text-[#f9cdcd] text-sm transition-all duration-1000 opacity-100 translate-x-full"
>
	<section class="flex gap-9 text-sans font-bold w-[95%] mx-auto">
		<span>●</span>

		<span>(5) INTERNAL WORKS<br />© c/o BASIC/DEPT®</span>

		<p class="flex-[0.8]">
			A COLLECTION OF INTERNAL PROJECTS AND INITIATIVES UNDER THE BASIC/DEPT® BRAND
		</p>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<CloseProjectsButton />
	</section>

	<ul
		id="projectCollection"
		class="flex w-[96.6%] m-auto overflow-y-hidden overflow-x-hidden mt-10"
	>
		{#each projects as project, i (i)}
			<li class="project">
				<Project {project} />

				<span class="text-xs text-[#f9cdcd]">
					0{i + 1}
				</span>
			</li>
		{/each}
	</ul>
</div>

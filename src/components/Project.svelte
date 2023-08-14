<script lang="ts">
	type Project = {
		name: string;
		text: string;
		expandedText: string;
		year: string;
		image: string;
		imageAlt: string;
		link: string;
	};

	export let project: Project;

	type MouseE = MouseEvent & {
		currentTarget: EventTarget & HTMLElement;
	};

	const onHover = (e: MouseE) => {
		e.stopPropagation();
		const expandedText = document.getElementById(`expandedText${project.name}`);

		const link = document.getElementById(`${project.link}${project.name}`);

		const image = document.getElementById(`${project.image}`);

		if (expandedText && link && image) {
			expandedText.classList.add('opacity-100', 'translate-y-0');
			expandedText.classList.remove('opacity-0', 'translate-y-52');

			link.classList.add('opacity-100', 'translate-y-0');
			link.classList.remove('opacity-0', 'translate-y-52');

			image.classList.add('h-[444px]');
			image.classList.remove('h-[524px]');
		}
	};

	const onLeave = (e: MouseE) => {
		e.stopPropagation();
		const expandedText = document.getElementById(`expandedText${project.name}`);

		const link = document.getElementById(`${project.link}${project.name}`);

		const image = document.getElementById(`${project.image}`);

		if (expandedText && link && image) {
			expandedText.classList.remove('opacity-100', 'translate-y-0');
			expandedText.classList.add('opacity-0');

			link.classList.remove('opacity-100', 'translate-y-0');
			link.classList.add('opacity-0');

			image.classList.add('h-[524px]');
			image.classList.remove('h-[444px]');
		}
	};
</script>

<article
	on:mouseenter={(e) => onHover(e)}
	on:mouseleave={(e) => onLeave(e)}
	class="flex-1 flex flex-col min-w-[490px] border-l border-[#f9cdcd] px-2  gap-5 font-sans h-[70vh] justify-between"
>
	<picture>
		<img id={`${project.image}`} class="object-cover w-full h-[524px] transition-all duration-700" src={project.image} alt={project.imageAlt} />
	</picture>

	<div class="flex-1 px-3">
		<div class="w-full font-bold text-2xl flex justify-between">
			<h4>{project.name}</h4>
			<span>{project.year}</span>
		</div>

		<span class="font-medium text-xs">{project.text}</span>

		<p
			id={`expandedText${project.name}`}
			class="transition-all duration-700 font-medium text-xs opacity-0 translate-y-52 mt-6 mb-6"
		>
			{project.expandedText}
		</p>

		<a
			id={`${project.link}${project.name}`}
			target="_blank"
			class="font-bold underline transition-all duration-700 opacity-0"
			href={project.link}
			>{project.name == 'APPLIED®' || project.name == 'BRANDBEATS®'
				? 'Explore'
				: 'Visit this site'}</a
		>
	</div>
</article>

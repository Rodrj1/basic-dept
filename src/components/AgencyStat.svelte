<script lang="ts">
	type AgencyStat = {
		title: string;
		info: string;
		ammount: string;
		translateYParagraph: string;
		translateYSpan: string;
	};

	export let agencyStat: AgencyStat;
</script>

<article class="flex flex-row-reverse items-start justify-start xl:flex-col xl:mt-16 h-auto xl:h-[350px]">
	<div class="flex flex-col gap-5 flex-1">
		<h5 class="text-lg xl:text-2xl">{agencyStat.title}</h5>

		<p class={`${agencyStat.translateYParagraph}`}>
			{agencyStat.info}
		</p>
	</div>

	<span class={`flex-[0.7] text-3xl xl:text-8xl xl:my-5 ${agencyStat.translateYSpan}`}
		>{agencyStat.ammount}</span
	>
</article>

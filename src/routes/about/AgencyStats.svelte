<script>
	import AgencyStat from '../../components/AgencyStat.svelte';
	import { stats } from '$lib/data/statsovertheyears';

	const firstStats = stats.slice(0, 3);
	const secondStats = stats.slice(3, 6);
</script>

<section
	class="w-[92%] min-h-[95vh] m-auto py-4 flex xl:gap-52 font-sans font-medium flex-col xl:flex-row relative"
>
	<div class="flex-1 flex flex-col xl:gap-10">
		<span>SEC.</span>

		<h3 class="my-16 text-4xl">AGENCY SNAPSHOT</h3>
	</div>

	<ul class="flex-1 flex flex-col gap-10">
		<span class="top-10 xl:top-0 absolute xl:relative">/A</span>

		{#each firstStats as agencyStat}
			<li>
				<AgencyStat {agencyStat} />
			</li>
		{/each}
	</ul>

	<ul class="flex-1 flex flex-col gap-10">
		<span class="self-end text-2xl">●</span>

		{#each secondStats as agencyStat}
			<li>
				<AgencyStat {agencyStat} />
			</li>
		{/each}
	</ul>
</section>

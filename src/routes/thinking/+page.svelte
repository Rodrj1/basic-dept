<script lang="ts">
	import { thinkingPosts } from '$lib/data/thinkingPosts';
	import ThinkingNew from '../../components/ThinkingNew.svelte';

	let displayThinkingPosts = thinkingPosts;

	const filterBy = (type: string) => {
		if (type === '') displayThinkingPosts = thinkingPosts;
		else {
			const filteredItems = thinkingPosts.filter((posts) => posts.type === type);
			displayThinkingPosts = filteredItems;
		}
	};
</script>

<section class="mt-40 w-[90%] m-auto text-[#f9cdcd] flex flex-col gap-20 justify-center h-[60vh]">
	<div class="flex justify-between w-[100%] items-center">
		<h1
			class="text-2xl xs:text-4xl sm:text-5xl base:text-6xl lg:text-7xl xl:text-[115px] font-bold"
		>
			THINKING
		</h1>

		<span class="text-9xl">●</span>
	</div>

	<div class="flex w-[70%] gap-10">
		<article>
			<h3 class="mb-5 text-xl font-bold font-sans">BRANDBEATS®</h3>

			<p class="font-medium font-sans">
				Brandbeats® is our agency podcast garnering over 45,000+ listens per episode where we
				discuss industry happenings for 30 minutes as well as provide ten tracks of curated music.
				Our conversations are a candid exploration of design topics, branding trends, and
				experiences we’re noticing in culture.
			</p>
		</article>

		<article>
			<h3 class="mb-5 text-xl font-bold font-sans">APPLIED®</h3>

			<p class="font-medium font-sans">
				Applied® is our panel series and thought-leadership platform where we share perspectives and
				tactics related to strategy, design, and technology. The content is raw and driven by honest
				observations and guided questions that use culture to explain why trends exist and how they
				impact business and tech.
			</p>
		</article>
	</div>
</section>

<section class="w-[100%] m-auto text-[#f9cdcd] flex flex-col gap-20 justify-center">
	<ul class="flex w-[90%] m-auto gap-14 text-sm font-sans font-medium spacing mb-4 justify-end">
		<li>
			<button on:click={() => filterBy('')} class="filterButtonPink relative">VIEW ALL</button>
		</li>
		<li>
			<button on:click={() => filterBy('BRANDBEATS')} class="filterButtonPink relative"
				>BRANDBEATS</button
			>
		</li>
		<li>
			<button on:click={() => filterBy('APPLIED')} class="filterButtonPink relative">APPLIED</button
			>
		</li>
	</ul>

	<ul class="flex flex-col gap-20 justify-between w-[90%] m-auto">
		{#each displayThinkingPosts as thinkingPost}
			<ThinkingNew {thinkingPost} />
		{/each}
	</ul>
</section>

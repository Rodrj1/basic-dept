<script lang="ts">
	import FeaturedNew from '../../components/FeaturedNew.svelte';
	import { allNews } from '$lib/data/allNews';

	let displayNews = allNews;

	const filterBy = (type: string) => {
		if (type === '') displayNews = allNews;
		else {
			const filteredItems = allNews.filter((news) => news.type === type);
			displayNews = filteredItems;
		}
	};
</script>

<svelte:head>
	<title
		>Branding & Experience Design News | BASIC/DEPT® | Digital Branding & Product Design Agency</title
	>
	<meta name="description" content="Website trying to recreate BASIC/DEPT" />
</svelte:head>

<section class="flex justify-between mt-20 xl:mt-40 w-[90%] m-auto items-center">
	<h1
		class="text-2xl xs:text-4xl sm:text-5xl base:text-6xl lg:text-7xl xl:text-[115px] font-bold text-zinc-800"
	>
		NEWS
	</h1>

	<span class="text-9xl">●</span>
</section>

<section class="w-full mt-12 xl:mt-40">
	<ul
		class="flex w-[90%] m-auto gap-14 text-sm font-sans font-medium text-gray-800 spacing mb-4 overflow-y-hidden overflow-x-scroll pb-4 sm:overflow-hidden sm:justify-end"
	>
		<li>
			<button on:click={() => filterBy('')} class="filterButton relative"> VIEW ALL </button>
		</li>
		<li><button on:click={() => filterBy('PRESS')} class="filterButton relative">PRESS</button></li>
		<li>
			<button on:click={() => filterBy('EVENTS')} class="filterButton relative">EVENTS</button>
		</li>
		<li>
			<button on:click={() => filterBy('AWARDS')} class="filterButton relative">AWARDS</button>
		</li>
		<li><button on:click={() => filterBy('WORK')} class="filterButton relative">WORK</button></li>
	</ul>

	<ul class="flex flex-col gap-20 justify-between w-[90%] m-auto">
		{#each displayNews as featuredNew}
			<FeaturedNew {featuredNew} />
		{/each}
	</ul>
</section>

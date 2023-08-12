<script>
	import AgencyStats from './AgencyStats.svelte';
	import Awards from './Awards.svelte';
	import Capabilities from './Capabilities.svelte';
	import TeamLeadership from './TeamLeadership.svelte';
	import WeirdGallery from './WeirdGallery.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="w-full bg-[#252422ff] text-[#f9cdcd] min-h-screen">
	<section class="w-[90%] xl:min-h-[95vh] m-auto pt-40">
		<h1
			class="text-2xl xs:text-4xl sm:text-5xl base:text-6xl lg:text-7xl xl:text-[115px] font-bold"
		>
			WE
			<br class="hidden xl:block" />
			TURN CULTURAL
			<br class="hidden xl:block" />
			VALUE
		</h1>

		<div class="flex flex-col xl:items-end xl:-translate-y-20">
			<h1
				class="text-2xl xs:text-4xl sm:text-5xl base:text-6xl lg:text-7xl xl:text-[115px] font-bold xl:w-[50%]"
			>
				●INTO
				<br class="hidden xl:block" />
				COMPANY
				<br class="hidden xl:block" />
				VALUE
			</h1>

			<p class="text-sm xs:text-xl xl:text-4xl xl:w-[50%] font-sans font-medium mt-7">
				BASIC/DEPT® is a global agency that thrives at the intersection of design, data, and
				technology. Together, we’re focused on transforming brands and culture — across the world.
			</p>
		</div>

		<div class="flex flex-col gap-3 pb-20">
			<span class="font-sans font-bold self-end xl:self-start">B/D®</span>
			<div class="w-full border border-[#f9cdcd]" />

			<div class="flex justify-between w-full relative">
				<span class="flex-[0] xl:flex-[0.5] font-bold xl:font-normal font-sans">2010-</span>
				<span class="flex-1 font-sans font-bold absolute left-0 top-5">PRESENT</span>
				<span class="flex-1.5 text-2xl">●</span>
			</div>
		</div>
	</section>

	<WeirdGallery />

	<h1
		class="w-[92%] m-auto text-4xl xs:text-[3.25rem] sm:text-7xl md:text-[6.5rem] lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] 3xl:text-[13rem] font-bold border-t border-b border-[#f9cdcd] mt-40 text-center"
	>
		BASIC/DEPT®
	</h1>

	<AgencyStats />

	<Capabilities />

	<Awards />

	<TeamLeadership />
</div>

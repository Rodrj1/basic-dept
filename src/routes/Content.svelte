<script lang="ts">
	import { news } from '$lib/data/news';
	import FeaturedNew from '../components/FeaturedNew.svelte';

	export let scrollValue: number;
</script>

<div
	class={`transition-colors duration-[500ms] ${
		scrollValue >= 3566 && scrollValue <= 4667
			? 'bg-[#272624] text-[#f9cdcd]'
			: 'bg-[#f4f4f4] text-black'
	}`}
>
	<section class="w-full flex flex-col gap-10">
		<div
			class="flex flex-col sm:flex-row justify-between items-center border-t border-t-black w-[90%] m-auto"
		>
			<p class="flex-1 text-3xl sm:text-4xl md:text-5xl text-black relative">
				<span class="text-5xl">BASIC/DEPT®</span>
				is a global branding and digital design agency building products, services, and eCommerce experiences
				that turn cultural values into company value.
			</p>

			<span
				class="text-8xl md:text-9xl lg:text-[14rem] font-bold flex-1 relative w-full sm:text-center"
				>B/D ®</span
			>
		</div>

		<div class="flex flex-col sm:flex-row w-[90%] m-auto gap-5">
			<article class="flex-1 h-[60vh]">
				<picture>
					<img
						class="object-cover w-full h-full"
						alt="Patagonia. Icy mountains before a lake."
						src="https://images.pexels.com/photos/2516401/pexels-photo-2516401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						loading="lazy"
					/>
				</picture>

				<div class="flex flex-col">
					<h2 class="text-xl font-bold my-4">PATAGONIA</h2>

					<span class="text-sm">AN ECOMMERCE EXPERIENCE DRIVEN BY</span>

					<span class="text-sm">PATAGONIA'S BRAND MISSION</span>
				</div>
			</article>

			<article class="flex-1 h-[60vh]">
				<picture>
					<img
						class="object-cover w-full h-full"
						alt="Tenis player resting with tenis ball besides him and a drink."
						src="https://images.pexels.com/photos/2996254/pexels-photo-2996254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						loading="lazy"
					/>
				</picture>

				<div class="flex flex-col">
					<h2 class="text-xl font-bold my-4">WILSON</h2>

					<span class="text-sm">A CENTURY OLD SPORTS BRAND FINDING</span>

					<span class="text-sm">ITS PLACE IN CULTURE</span>
				</div>
			</article>

			<article class="flex-1">
				<video autoplay muted loop width="100%">
					<source
						src="https://player.vimeo.com/external/476815313.hd.mp4?s=1a8d9b9039a6c64c69bf486355a411cd646148f0"
						type="video/mp4"
					/>
				</video>

				<div class="flex flex-col">
					<h2 class="text-xl font-bold my-4">GOOGLE STORE</h2>

					<span class="text-sm">AN ECOMMERCE EXPERIENCE HELPING</span>

					<span class="text-sm">GOOGLE BRING ITS HARDWARE TO</span>

					<span class="text-sm">PEOPLE ACROSS THE GLOBE</span>
				</div>
			</article>
		</div>
	</section>

	<h1 class="text-4xl sm:text-6xl md:text-7xl font-bold text-left w-[90%] m-auto mt-40">
		FEATURED<br />ENGAGEMENTS
	</h1>

	<section class="w-full mt-20 md:mt-40">
		<div
			class="flex gap-10 justify-between h-auto lg:h-[60vh] w-[90%] m-auto overflow-x-auto overflow-y-hidden"
		>
			<div class="flex flex-col items-start justify-start flex-1 min-w-[280px] h-[100%]">
				<h1 class="font-bold text-4xl mb-24">Google</h1>

				<h2 class="font-bold text-xl mb-5">GOOGLE</h2>

				<span class="text-base font-bold"
					>Our embedded partnership with Google is as deep as it gets. We're the lead creative
					agency for Google Store and provide stragey, design, and prototyping to other divisions.
					Learn more about or partnership here.</span
				>
			</div>

			<div class="flex flex-col items-center justify-start flex-1 min-w-[280px] h-[100%]">
				<div class="flex flex-col items-start">
					<h1 class="font-bold text-4xl mb-24">KFC</h1>

					<h2 class="font-bold text-xl mb-5">KFC</h2>

					<span class="text-base font-bold"
						>An award-winning global, digital transformation engagement spanning eCommerce, mobile
						app, and new drive thru experiences. Bringing KFC's brand story to life while making it
						easier for customers to buy chicken. Learn more about our partnership here.</span
					>
				</div>
			</div>

			<div class="flex flex-col items-center justify-start flex-1 min-w-[280px] h-[100%]">
				<div class="flex flex-col items-start">
					<h1 class="font-bold text-4xl mb-24">Wilson</h1>

					<h2 class="font-bold text-xl mb-5">WILSON</h2>

					<span class="text-base font-bold"
						>A reimagining of Wilson's brand visual identity, and brand campaign, to support a new
						product drop and the launch of the first brick and mortar retail location in ther
						brand's 108-year history. Read our full case study here.</span
					>
				</div>
			</div>

			<div class="flex flex-col items-center justify-start flex-1 min-w-[280px] h-[100%]">
				<div class="flex flex-col items-start">
					<h1 class="font-bold text-4xl mb-24">AT&T</h1>

					<h2 class="font-bold text-xl mb-5">AT&T</h2>

					<span class="text-base font-bold"
						>Redesigning the digital flagship for the largest telcommunications company in the
						world. Creating frictionless paths to purchase for a wide range of consumers across a
						vast portfolio of products and services.</span
					>
				</div>
			</div>

			<div class="flex flex-col items-center justify-start flex-1 min-w-[280px] h-[100%]">
				<div class="flex flex-col items-start">
					<h1 class="font-bold text-4xl mb-24">patagonia</h1>

					<h2 class="font-bold text-xl mb-5">PATAGONIA</h2>

					<span class="text-base font-bold"
						>Ongoing partnership providing strategy, branding, experience design, and development
						focused on bringing their mission and offerings to consumers through brand-led programs
						and platforms. Read our full case study here.</span
					>
				</div>
			</div>
		</div>
	</section>

	<section class="w-full">
		<div
			class="w-[90%] m-auto flex flex-col-reverse lg:flex-row relative justify-end  items-start base:items-center xl:items-start border-t border-t-black lg:py-20 gap-5 sm:gap-0 pt-20"
		>
			<div
				class={`flex flex-col justify-start flex-1 w-max sm:w-[80%] lg:w-[50%] ${
					scrollValue >= 3767 && scrollValue <= 4252 && 'lg:fixed lg:top-[10%] lg:left-[5%]'
				} ${scrollValue > 4252 && 'lg:absolute lg:bottom-[0%] lg:left-[0%] justify-end'}`}
			>
				<h1 class={`flex-1 text-left font-sans font-bold w-full text-4xl sm:text-6xl md:text-7xl`}>
					BASIC/DEPT®<br />
					HELPS<br />
					BRANDS●<br />
					CONNECT W/<br />
					CULTURE
				</h1>

				<span class="text-lg text-left font-sans font-bold mt-14"
					>ADWEEK <strong>AGENCY SPOTLIGHT</strong></span
				>

				<button
					class={`text-xs font-sans font-bold mt-24 w-max py-2 px-5 rounded-full ${
						scrollValue >= 3767 && scrollValue <= 4652
							? 'border border-[#f9cdcd]'
							: 'border border-black'
					}`}
					aria-label="ABOUT US">ABOUT US</button
				>
			</div>

			<video autoplay muted loop class="w-max sm:w-[80%] lg:w-[50%]">
				<source
					src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
	</section>

	<h1 class="text-4xl sm:text-6xl md:text-7xl font-bold text-left w-[90%] m-auto mt-20 md:mt-40">
		FEATURED<br />NEWS
	</h1>

	<section class="w-full mt-20">
		<ul class="flex flex-col gap-20 justify-between w-[90%] m-auto">
			{#each news as featuredNew}
				<FeaturedNew {featuredNew} />
			{/each}
		</ul>
	</section>
</div>

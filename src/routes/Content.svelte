<script lang="ts">
	import { news } from '$lib/data/featuredNews';
	import { onMount } from 'svelte';
	import FeaturedNew from '../components/FeaturedNew.svelte';
	import { scrollValue } from '../store';

	onMount(() => {
		document.body.addEventListener('wheel', checkScrollDirection);

		let headerElement = document.getElementById('header');

		function checkScrollDirection(event: any) {
			if (checkScrollDirectionIsUp(event)) {
				headerElement?.classList.add('opacity-100');
				headerElement?.classList.remove('opacity-0');
			} else {
				headerElement?.classList.add('opacity-0');
				headerElement?.classList.remove('opacity-100');
			}
		}

		function checkScrollDirectionIsUp(event: any) {
			if (event.wheelDelta) {
				return event.wheelDelta > 0;
			}
			return event.deltaY < 0;
		}
	});
</script>

<div
	class={`transition-colors duration-[500ms] ${
		$scrollValue >= 3466 && $scrollValue <= 4667
			? 'bg-[#252422ff] text-[#f9cdcd]'
			: 'bg-[#f4f4f4] text-black'
	}`}
>
	<section class="w-full flex flex-col gap-10">
		<div
			class="flex flex-col sm:flex-row justify-between items-center border-t border-t-black w-[90%] m-auto"
		>
			<p
				class="flex-1 text-sm xs:text-2xl sm:text-3xl md:text-4xl text-black relative font-serif font-medium"
			>
				<span class="text-2xl xs:text-5xl">BASIC/DEPT®</span>
				is a global branding and digital design agency building products, services, and eCommerce experiences
				that turn cultural values into company value.
			</p>

			<figure class="flex-1">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100"
					><path
						d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0v84.4zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7zm2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1zM128.3 0h-18.9L73.6 100h18.5L128.3 0zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2zm-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6zM224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1zm7.9 0c0-18.9 14.7-34 33.2-34 18.5 0 33.2 15.1 33.2 34s-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34zM246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1z"
					/></svg
				>
			</figure>
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

					<span class="text-sm text-zinc-700 font-sans font-medium"
						>AN ECOMMERCE EXPERIENCE DRIVEN BY</span
					>

					<span class="text-sm text-zinc-700 font-sans font-medium">PATAGONIA'S BRAND MISSION</span>
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

					<span class="text-sm text-zinc-700 font-sans font-medium"
						>A CENTURY OLD SPORTS BRAND FINDING</span
					>

					<span class="text-sm text-zinc-700 font-sans font-medium">ITS PLACE IN CULTURE</span>
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

					<span class="text-sm text-zinc-700 font-sans font-medium"
						>AN ECOMMERCE EXPERIENCE HELPING</span
					>

					<span class="text-sm text-zinc-700 font-sans font-medium"
						>GOOGLE BRING ITS HARDWARE TO</span
					>

					<span class="text-sm text-zinc-700 font-sans font-medium">PEOPLE ACROSS THE GLOBE</span>
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
			<div
				class="flex flex-col items-start justify-start flex-1 min-w-[450px] h-[100%] justify-between h-[50%]"
			>
				<picture class="h-[30%] w-[30%]"
					><img
						src="https://cdn.sanity.io/images/8nn8fua5/production/7121121ed910b145bdb6df487966a7888c2eb7c3-272x92.svg?w=720&amp;fm=webp&amp;q=65"
						alt="Google Logo"
						loading="lazy"
					/></picture
				>

				<h2 class="font-bold text-xl mb-5">GOOGLE</h2>

				<span class="text-base text-zinc-700 font-sans font-medium"
					>Our embedded partnership with Google is as deep as it gets. We're the lead creative
					agency for Google Store and provide stragey, design, and prototyping to other divisions.
					Learn more about or partnership here.</span
				>
			</div>

			<div class="flex flex-col items-center justify-start flex-1 min-w-[450px] h-[100%]">
				<div class="flex flex-col items-start justify-between h-[50%]">
					<picture class="h-[30%] w-[30%]"
						><img
							src="https://cdn.sanity.io/images/8nn8fua5/production/09a68ec6d03469bfd5bbb9726a58225acb900ae2-128x42.svg?w=720&amp;fm=webp&amp;q=65"
							alt="KFC Logo"
							loading="lazy"
						/></picture
					>

					<h2 class="font-bold text-xl mb-5">KFC</h2>

					<span class="text-base text-zinc-700 font-sans font-medium"
						>An award-winning global, digital transformation engagement spanning eCommerce, mobile
						app, and new drive thru experiences. Bringing KFC's brand story to life while making it
						easier for customers to buy chicken. Learn more about our partnership here.</span
					>
				</div>
			</div>

			<div class="flex flex-col items-center justify-start flex-1 min-w-[450px] h-[100%]">
				<div class="flex flex-col items-start justify-between h-[50%]">
					<picture class="h-[30%] w-[30%]"
						><img
							src="https://cdn.sanity.io/images/8nn8fua5/production/fbb650ce74c1849cb4da2d9951fad89149494cc9-171x42.svg?w=720&amp;fm=webp&amp;q=65"
							alt="Wilson logo"
							loading="lazy"
						/></picture
					>

					<h2 class="font-bold text-xl mb-5">WILSON</h2>

					<span class="text-base text-zinc-700 font-sans font-medium"
						>A reimagining of Wilson's brand visual identity, and brand campaign, to support a new
						product drop and the launch of the first brick and mortar retail location in ther
						brand's 108-year history. Read our full case study here.</span
					>
				</div>
			</div>

			<div class="flex flex-col items-center justify-start flex-1 min-w-[450px] h-[100%]">
				<div class="flex flex-col items-start justify-between h-[50%]">
					<picture class="h-[10%] w-[10%]"
						><img
							src="https://cdn.sanity.io/images/8nn8fua5/production/b2624b2d49d9c14eec0cd30203c5eec0331eac42-42x42.svg?w=720&amp;fm=webp&amp;q=65"
							alt="AT&T Logo"
							loading="lazy"
						/></picture
					>

					<h2 class="font-bold text-xl mb-5">AT&T</h2>

					<span class="text-base text-zinc-700 font-sans font-medium"
						>Redesigning the digital flagship for the largest telcommunications company in the
						world. Creating frictionless paths to purchase for a wide range of consumers across a
						vast portfolio of products and services.</span
					>
				</div>
			</div>

			<div class="flex flex-col items-center justify-start flex-1 min-w-[450px] h-[100%]">
				<div class="flex flex-col items-start justify-between h-[50%]">
					<picture class="h-[40%] w-[40%]"
						><img
							src="https://cdn.sanity.io/images/8nn8fua5/production/8dd2f090726c8d5befeaa2924b44678e69452945-1024x200.svg?w=720&amp;fm=webp&amp;q=65"
							alt="Patagonia ALogo"
							loading="lazy"
						/></picture
					>

					<h2 class="font-bold text-xl mb-5">PATAGONIA</h2>

					<span class="text-base text-zinc-700 font-sans font-medium"
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
			class="w-[90%] m-auto flex flex-col-reverse lg:flex-row relative justify-end items-start lg:items-center xl:items-start border-t border-t-black lg:py-20 gap-5 sm:gap-0 pt-20"
		>
			<div
				class="sticky flex flex-col flex-1 w-max sm:w-[80%] lg:w-[50%] top-0 justify-around md:h-[80vh]"
			>
				<h1
					class={`text-left font-sans font-bold w-full text-3xl base:text-6xl lg:text-7xl xl:text-8xl`}
				>
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
					class={`text-xs font-sans font-medium mt-24 w-max py-1 px-7 rounded-full ${
						$scrollValue >= 3667 && $scrollValue <= 4652
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
				<li>
					<FeaturedNew {featuredNew} />
				</li>
			{/each}
		</ul>
	</section>
</div>

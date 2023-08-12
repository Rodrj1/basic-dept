<script>
	import Follow from './Follow.svelte';
import Offices from './Offices.svelte';
</script>

<section class="w-[90%] m-auto mt-40">
	<div class="flex flex-col-reverse xl:flex-row justify-between w-full relative gap-5">
		<div class="flex-1 relative">
			<figure>
				<img
					class="object-cover"
					src="https://cdn.sanity.io/images/8nn8fua5/production/cb0aa290219a3dc370e4b6a6c4f4b3effee44767-1736x2430.jpg?w=1280&fm=webp&q=65"
					alt="A man in an orange beanie wearing headphones."
				/>
			</figure>

			<div
				class="flex flex-col xl:flex-row justify-between xl:-translate-y-[120%] xl:translate-x-[100%] 2xl:-translate-y-[190%] 2xl:translate-x-[100%] font-sans font-medium"
			>
				<span class="text-9xl w-max xl:-translate-y-[16%]">●</span>

				<div class="flex flex-col gap-20">
					<article class="flex flex-col gap-4">
						<h4 class="text-2xl">NEW BUSINESS</h4>

						<span class="text-zinc-700 text-base font-sans font-medium underline">biz@basicagency.com</span>
					</article>

					<article class="flex flex-col gap-4">
						<h4 class="text-2xl">PRESS</h4>

						<span class="text-zinc-700 text-base font-sans font-medium underline">press@basicagency.com</span>
					</article>
				</div>

				<div class="flex flex-col gap-20">
					<article class="flex flex-col gap-4">
						<h4 class="text-2xl">GENERAL</h4>

						<span class="text-zinc-700 text-base font-sans font-medium underline"
							>hi@basicagency.com</span
						>
					</article>

					<article class="flex flex-col gap-4">
						<h4 class="text-2xl">JOIN US</h4>

						<span class="text-zinc-700 text-base font-sans font-medium underline"
							>recruitment@basicagency.com (Various Openings)</span
						>

						<button
							class="text-xs w-max py-1 px-7 rounded-full border border-[#000]"
							aria-label="APPLY HERE">APPLY NOW</button
						>
					</article>
				</div>
			</div>
		</div>

		<div class="flex-1 flex flex-col h-max">
			<h1
				class="text-2xl xs:text-4xl sm:text-5xl base:text-6xl lg:text-7xl xl:text-[115px] font-bold"
			>
				B/D®<br class="hidden xl:block" />
				CONTACT
			</h1>

			<p class="mt-20 mb-10 text-xs text-zinc-700 font-sans font-medium">
				EASY TO UNDERSTAND.<br />
				IMPOSSIBLE TO IGNORE.™<br />
				BASIC/DEPT®, INC 10 - 23©
			</p>
		</div>
	</div>

	<Offices />

    <Follow />
</section>

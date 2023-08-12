<script>
	import { awards } from '$lib/data/awards';
	import Award from '../../components/Award.svelte';
</script>

<section
	class="w-[92%] min-h-[90vh] m-auto font-sans font-medium border-b border-[#f9cdcd] flex flex-col gap-32 relative"
>
	<div class="w-full pt-4 flex gap-0 xl:gap-52 justify-center flex-col xl:flex-row">
		<div class="flex-1 flex flex-col gap-0 xl:gap-10">
			<span>SEC.</span>

			<h3 class="my-16 text-4xl">AWARDS</h3>
		</div>

		<div class="flex-[1.6] flex flex-col gap-10">
			<span class="top-10 xl:top-0 absolute xl:relative">/A</span>

			<article class="flex flex-col gap-5">
				<p class="text-sm xs:text-xl xl:text-4xl xl:my-16">
					While results are what matter most, we believe awards bring value and recognition to
					organizations as well as individuals.
				</p>

				<button
					class="text-xs font-sans font-medium w-max py-1 px-7 rounded-full border border-[#f9cdcd]"
					>FULL AWARDS LIST</button
				>
			</article>
		</div>

		<!-- Needs to be flex and flex-col so the point goes to end of X axis -->
		<div class="flex-[0.4] flex flex-col">
			<span class="self-end absolute xl:relative top-10 xl:top-0">●</span>
		</div>
	</div>

	<ul class="text-9xl flex flex-col gap-5">
		{#each awards as award}
			<Award {award} />
		{/each}
	</ul>

	<div class="flex-[0.4] flex flex-col base:-translate-y-36">
		<span class="text-sm xs:text-base self-end mb-4">SETTING STANDARDS OTHERS FOLLOW ●</span>
	</div>
</section>

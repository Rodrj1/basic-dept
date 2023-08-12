<script lang="ts">
	import { team } from '$lib/data/team';
	import CardMember from '../../components/CardMember.svelte';
</script>

<section
	class="w-[92%] min-h-[90vh] m-auto font-sans font-medium border-b border-[#f9cdcd] flex flex-col gap-20 relative"
>
	<div class="w-full pt-4 flex xl:gap-52 justify-center flex-col xl:flex-row">
		<div class="flex-1 flex flex-col xl:gap-10">
			<span>SEC.</span>

			<h3 class="my-16 text-4xl">TEAM &<br /> LEADERSHIP</h3>
		</div>

		<div class="flex-[1.6] flex flex-col">
			<span class="top-10 xl:top-0 absolute xl:relative">/D</span>

			<p class="text-sm xs:text-xl xl:text-4xl xl:pt-7 xl:my-16">
				We’re 120+ individuals from across the world driven by bold ideas and diverse perspectives.
				Craft, service, and efficiency drive us forward and we see our agency as a place for our
				shared values to collide.
			</p>
		</div>

		<!-- Needs to be flex and flex-col so the point goes to end of X axis -->
		<div class="flex-[0.4] flex flex-col">
			<span class="self-end absolute xl:relative top-10 xl:top-0 text-2xl">●</span>
		</div>
	</div>

	<ul class="flex gap-4 flex-wrap justify-start">
		{#each team as member}
			<li>
				<CardMember {member} />
			</li>
		{/each}
	</ul>
</section>

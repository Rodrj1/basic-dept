<script>
	import { offices } from '$lib/data/offices';
	import Office from '../../components/Office.svelte';
</script>

<section class="flex flex-col lg:flex-row mt-24 xl:mt-0">
	<h3 class="flex-[0.33] text-4xl font-bold mb-12 xl:mb-0">OFFICES</h3>

	<section class="flex-[0.67]">
		<ul class="flex flex-wrap gap-4">
			{#each offices as office}
				<li class="w-full sm:w-[48%]">
					<Office {office} />
				</li>
			{/each}
		</ul>
	</section>
</section>

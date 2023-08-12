<script lang="ts">
	export let featuredNew: FeaturedNew;
</script>

<a href="/">
	<article
		class="flex flex-col md:flex-row gap-5 items-start border-t border-t-black py-5 relative overflow-x-auto overflow-y-hidden"
	>
		<picture class="flex-[0.8]">
			<img class="object-cover" alt={featuredNew.alt} src={featuredNew.image} loading="lazy" />
		</picture>

		<div class="flex flex-[1.2] flex-col justify-between">
			<h2 class="text-4xl font-bold -translate-y-2">{featuredNew.title.toUpperCase()}</h2>

			<span class="absolute -bottom-1 lg:bottom-4"
				><strong>{featuredNew.type}</strong> {featuredNew.date}</span
			>
		</div>
	</article>
</a>

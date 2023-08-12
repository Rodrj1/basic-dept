<script lang="ts">
	export let featuredNew: FeaturedNew;
</script>

<li>
	<article>
		<a
			href="/"
			class="flex flex-col md:flex-row gap-5 items-start border-t border-t-black py-5 relative overflow-x-auto overflow-y-hidden focus:outline-2 focus:outline-red-600"
		>
			<picture class="shrink-0">
				<img
					class="h-auto w-full object-cover"
					alt={featuredNew.alt}
					src={featuredNew.image}
					loading="lazy"
				/>
			</picture>

			<div class="flex flex-col justify-between">
				<h2 class="text-4xl font-bold -translate-y-2">{featuredNew.title}</h2>

				<span class="absolute -bottom-1 lg:bottom-4"
					><strong>{featuredNew.type}</strong> {featuredNew.date}</span
				>
			</div>
		</a>
	</article>
</li>

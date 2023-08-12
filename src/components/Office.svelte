<script lang="ts">
	type Office = {
		name: string;
		street: string;
		location: string;
		image: string;
		imageAlt: string;
		timezone: string;
	};

	export let office: Office;
</script>

<article class="flex-1 w-full border-l border-black pl-4">
	<div class="flex flex-col gap-5">
		<figure>
			<img class="object-cover" src={office.image} alt={office.imageAlt} />
		</figure>

		<article class="flex justify-between items-center">
			<h5 class="text-lg xl:text-xl font-bold">{office.name}</h5>

			<span class="text-sm text-zinc-700 font-sans font-medium">{office.timezone}</span>
		</article>

		<div class="flex flex-col gap-0 p-0">
			<p class="text-zinc-700 text-xs font-sans font-medium">
				{office.street}
			</p>
			<p class="text-zinc-700 text-xs font-sans font-medium">
				{office.location}
			</p>
		</div>
	</div>
</article>

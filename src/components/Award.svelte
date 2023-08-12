<script lang="ts">
	type Award = {
		name: string;
		position: string;
	};

	export let award: Award;
</script>

<li class="relative opacity-30 hover:opacity-100">
	<a href="/" class="text-2xl xs:text-4xl sm:text-6xl md:text-7xl base:8xl lg:text-8xl xl:text-9xl"
		>{award.name}<span class="text-xl font-bold absolute translate-y-[300%] lg:translate-y-[70%]">/{award.position}</span></a
	>
</li>

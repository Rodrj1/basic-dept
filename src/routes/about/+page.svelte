<script>
	import AgencyStats from './AgencyStats.svelte';
	import Awards from './Awards.svelte';
	import Capabilities from './Capabilities.svelte';
import WeirdGallery from './WeirdGallery.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="w-full bg-[#252422ff] text-[#f9cdcd] min-h-screen">
	<section class="w-[90%] min-h-[95vh] m-auto pt-40 flex flex-col justify-between pb-10">
		<div class="flex-1">
			<h1 class="text-[115px] font-bold">WE TURN<br />CULTURAL<br />VALUE</h1>

			<div class=" flex flex-col items-end -translate-y-20">
				<h1 class="text-[115px] font-bold w-[50%]">●INTO<br />COMPANY<br />VALUE</h1>

				<p class="text-4xl w-[50%] font-sans font-medium mt-7">
					BASIC/DEPT® is a global agency that thrives at the intersection of design, data, and
					technology. Together, we’re focused on transforming brands and culture — across the world.
				</p>
			</div>
		</div>
	</section>

	<WeirdGallery />

	<h1 class="w-[92%] m-auto text-[13rem] font-bold border-t border-b border-[#f9cdcd] mt-40">BASIC/DEPT®</h1>

	<AgencyStats />

	<Capabilities />

	<Awards />
</div>

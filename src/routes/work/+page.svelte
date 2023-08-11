<script>
	import BrandedEcommerce from './BrandedEcommerce.svelte';
	import BrandingAdversiting from './BrandingAdversiting.svelte';
	import DigitalProductsServices from './DigitalProductsServices.svelte';
	import WebsitePlatforms from './WebsitePlatforms.svelte';
</script>

<section
	class="w-[90%] h-[95vh] m-auto pt-40 flex flex-col justify-between border-b border-black pb-10"
>
	<h1 class="text-9xl font-bold text-zinc-800">
		EASYTO<br />UNDERSTAND.<br />●IMPOSSIBLE<br />TOIGNORE.
	</h1>

	<div class="flex justify-between items-center">
		<ul class="flex gap-10 font-sans font-medium text-sm text-zinc-600">
			<li>SERVICES</li>
			<li>INDUSTRIES</li>
			<li>ALL WORK</li>
		</ul>

		<p class="text-base text-zinc-600 max-w-[350px] font-medium font-sans">
			The work we create lives at the intersection of clarity and surprise and positions brands in
			culture through shared values and ideals.
		</p>
	</div>
</section>

<WebsitePlatforms />

<BrandedEcommerce />

<BrandingAdversiting />

<DigitalProductsServices />

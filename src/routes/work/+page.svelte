<script>
	import BrandedEcommerce from './BrandedEcommerce.svelte';
	import BrandingAdversiting from './BrandingAdversiting.svelte';
	import DigitalProductsServices from './DigitalProductsServices.svelte';
	import WebsitePlatforms from './WebsitePlatforms.svelte';
</script>

<svelte:head>
	<title>Digital Product, Branding, & eCommerce Services | BASIC/DEPT® | Digital Branding & Product Design Agency</title>
	<meta name="description" content="Website trying to recreate BASIC/DEPT" />
</svelte:head>


<section
	class="w-[90%] h-auto xl:min-h-[95vh] m-auto mt-32 xl:mt-40 flex flex-col justify-between border-b border-black pb-10 gap-10"
>
	<h1 class="text-2xl xs:text-4xl sm:text-5xl base:text-6xl lg:text-7xl xl:text-[115px] font-bold">
		EASYTO<br />UNDERSTAND.<br />●IMPOSSIBLE<br />TOIGNORE.
	</h1>

	<div class="flex justify-between items-start xl:items-center flex-col-reverse xl:flex-row">
		<ul class="flex gap-10 font-sans font-medium text-sm text-zinc-600">
			<li>SERVICES</li>
			<li>INDUSTRIES</li>
			<li>ALL WORK</li>
		</ul>

		<p class="text-base text-zinc-600 max-w-[350px] font-medium font-sans mb-10 xl:mb-0">
			The work we create lives at the intersection of clarity and surprise and positions brands in
			culture through shared values and ideals.
		</p>
	</div>
</section>

<WebsitePlatforms />

<BrandedEcommerce />

<BrandingAdversiting />

<DigitalProductsServices />

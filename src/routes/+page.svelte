<script>
	import Content from './Content.svelte';
	import Footer from './Footer.svelte';
	import Main from './Main.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-12/12 bg-[#f4f4f4]">
	<Main />

	<Content />

	<Footer />
</section>

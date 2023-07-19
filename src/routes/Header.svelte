<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import { headerStyle } from '../store';

	let navIsVisible: boolean = true;

	const handleNavVisibility = () => {
		const updateNavVisibility = navIsVisible === true ? false : true;
		navIsVisible = updateNavVisibility;
	};
</script>

<button
	on:click={handleNavVisibility}
	class={`fixed right-10 text-xl top-10 block xl:hidden z-[100] ${$headerStyle}`}>MENU</button
>

<header
	class={`flex items-center justify-between fixed z-50 transition-colors duration-100 w-full xl:h-[100px] ${
		navIsVisible && 'h-[100vh]'
	}  ${$page.url.pathname === '/' ? `${$headerStyle}` : 'text-black'}`}
>
	<div class="hidden xl:block w-[3em] h-[3em]">
		<a class={'flex items-center justify-center w-full h-full'} href="https://kit.svelte.dev">
			<img class="w-[2em] h-[2em] object-contain" src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class={`hidden xl:flex justify-center z-lg relative`}>
		<ul class="flex flex-col xl:flex-row justify-center gap-10 p-4 text-xl">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">HOME!</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">ABOUT!</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/news') ? 'page' : undefined}>
				<a href="/">NEWS</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/thinking') ? 'page' : undefined}>
				<a href="/">THINKING</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/careers') ? 'page' : undefined}>
				<a href="/">CAREERS</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a href="/">CONTACT</a>
			</li>
		</ul>
	</nav>

	{#if navIsVisible === true}
		<nav
			class={`flex xl:hidden justify-start text-lg absolute h-[100vh] bg-[#262420] w-full items-start p-12 z-[100]`}
		>
			<ul
				class="flex flex-col xl:flex-row justify-center gap-10 p-4 text-4xl text-[#f9cdcd] font-serif items-start"
			>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a on:click={handleNavVisibility} href="/">HOME!</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a on:click={handleNavVisibility} href="/about">ABOUT!</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/news') ? 'page' : undefined}>
					<a href="/">NEWS</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/thinking') ? 'page' : undefined}>
					<a href="/">THINKING</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/careers') ? 'page' : undefined}>
					<a href="/">CAREERS</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
					<a href="/">CONTACT</a>
				</li>
			</ul>
		</nav>
	{/if}

	<div />
</header>

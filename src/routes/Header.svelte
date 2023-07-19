<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import { headerStyle } from '../store';
</script>

<header class={`flex items-center justify-between fixed z-50 transition-colors duration-100 w-full h-[100px] ${$headerStyle}`}>
	<div class="w-[3em] h-[3em]">
		<a class={'flex items-center justify-center w-full h-full'} href="https://kit.svelte.dev">
			<img class="w-[2em] h-[2em] object-contain" src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class="flex justify-center text-lg">
		<ul class="flex justify-center gap-10 p-4">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Work</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/news') ? 'page' : undefined}>
				<a href="/">News</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/thinking') ? 'page' : undefined}>
				<a href="/">Thinking</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/careers') ? 'page' : undefined}>
				<a href="/">Careers</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a href="/">Contact</a>
			</li>
		</ul>
	</nav>

	<div />
</header>

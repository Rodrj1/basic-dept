<script lang="ts">
	import { headerStyle, scrollValue } from '../store';

	let smallNavIsVisible: boolean = false;

	const handleNavVisibility = () => {
		const updateNavVisibility = smallNavIsVisible === true ? false : true;
		smallNavIsVisible = updateNavVisibility;
	};

	import { page } from '$app/stores';

	$: color =
		$scrollValue >= 3466 && $scrollValue <= 4667 && $page.url.pathname === '/'
			? 'after:bg-[#F9CDCC]'
			: 'after:bg-[#000]';
</script>

<header
	id="header"
	class={`flex items-center justify-center fixed z-50 w-full xl:h-[150px] pb-10 transition-all duration-[500ms] ${
		smallNavIsVisible && 'h-[100vh]'
	}  ${$page.url.pathname == '/' && `${$headerStyle}`}
	 ${$page.url.pathname == '/work' && 'bg-[#f4f4f4]'} 
	 ${$page.url.pathname == '/about' && 'bg-[#252422ff] text-[#f9cdcd]'}
	 
	 ${$page.url.pathname == '/news' && 'bg-[#f4f4f4]'}
	${$page.url.pathname == '/thinking' && 'bg-[#252422ff] text-[#f9cdcd]'}
	${$page.url.pathname == '/careers' && 'bg-[#252422ff] text-[#f9cdcd]'}
	${$page.url.pathname == '/contact' && 'bg-[#f4f4f4]'}
	`}
>
	<nav id="xlNavbar" class={`hidden xl:flex z-lg relative items-center justify-between w-[90%]`}>
		<a class="flex-[0.2]" href="/"><h4 class="text-2xl font-bold font-sans">BASIC/DEPT®</h4></a>

		<ul class="flex flex-col xl:flex-row gap-20 p-4 text-xs font-sans font-medium">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a
					class={`${color}
					${$page.url.pathname == '/about' && 'after:bg-[#f9cdcd]'} ${
						$page.url.pathname == '/work' && 'after:bg-[#000] after:w-[100%]'
					}		
					${$page.url.pathname == '/news' && 'after:bg-[#000]'}	
					${$page.url.pathname == '/thinking' && 'after:bg-[#f9cdcd]'}	
					${$page.url.pathname == '/careers' && 'after:bg-[#f9cdcd]'}
					${$page.url.pathname == '/contact' && 'after:bg-[#000]'}				
					`}
					href="/work">WORK</a
				>
			</li>

			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a
					class={`${color} 
					${$page.url.pathname == '/about' && 'after:bg-[#f9cdcd] after:w-[100%]'} 
					
					${$page.url.pathname == '/work' && 'after:bg-[#000] '}
					
					${$page.url.pathname == '/news' && 'after:bg-[#000]'}	
					
					${$page.url.pathname == '/thinking' && 'after:bg-[#f9cdcd]'}	
					
					${$page.url.pathname == '/careers' && 'after:bg-[#f9cdcd] '}
					
					${$page.url.pathname == '/contact' && 'after:bg-[#000]'}`}
					href="/about">ABOUT</a
				>
			</li>

			<li aria-current={$page.url.pathname.startsWith('/news') ? 'page' : undefined}>
				<a
					class={`${color} 
					${$page.url.pathname == '/about' && 'after:bg-[#f9cdcd]'} ${
						$page.url.pathname == '/work' && 'after:bg-[#000]'
					}${$page.url.pathname == '/news' && 'after:bg-[#000] after:w-[100%]'}	
					${$page.url.pathname == '/thinking' && 'after:bg-[#f9cdcd]'}	
					${$page.url.pathname == '/careers' && 'after:bg-[#f9cdcd]'}
					${$page.url.pathname == '/contact' && 'after:bg-[#000]'}`}
					href="/news">NEWS</a
				>
			</li>

			<li aria-current={$page.url.pathname.startsWith('/thinking') ? 'page' : undefined}>
				<a
					class={`${color} 
					${$page.url.pathname == '/about' && 'after:bg-[#f9cdcd]'} ${
						$page.url.pathname == '/work' && '!after:bg-[#000]'
					}${$page.url.pathname == '/news' && 'after:bg-[#000]'}	
					${$page.url.pathname == '/thinking' && 'after:bg-[#f9cdcd] after:w-[100%]'}	
					${$page.url.pathname == '/careers' && 'after:bg-[#f9cdcd]'}
					${$page.url.pathname == '/contact' && 'after:bg-[#000]'}`}
					href="/thinking">THINKING</a
				>
			</li>

			<li aria-current={$page.url.pathname.startsWith('/careers') ? 'page' : undefined}>
				<a
					class={`${color} 
					${$page.url.pathname == '/about' && 'after:bg-[#f9cdcd]'} ${
						$page.url.pathname == '/work' && 'after:bg-[#000]'
					}${$page.url.pathname == '/news' && 'after:bg-[#000]'}	
					${$page.url.pathname == '/thinking' && 'after:bg-[#f9cdcd]'}	
					${$page.url.pathname == '/careers' && 'after:bg-[#f9cdcd] after:w-[100%]'}
					${$page.url.pathname == '/contact' && 'after:bg-[#000]'}`}
					href="/careers">CAREERS</a
				>
			</li>

			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a
					class={`${color} 
					${$page.url.pathname == '/about' && 'after:bg-[#f9cdcd]'} ${
						$page.url.pathname == '/work' && 'after:bg-[#000]'
					}${$page.url.pathname == '/news' && 'after:bg-[#000]'}	
					${$page.url.pathname == '/thinking' && 'after:bg-[#f9cdcd]'}	
					${$page.url.pathname == '/careers' && 'after:bg-[#f9cdcd]'}
					${$page.url.pathname == '/contact' && 'after:bg-[#000] after:w-[100%]'}`}
					href="/contact">CONTACT</a
				>
			</li>
		</ul>

		<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 20 20"
			><path
				fill="currentColor"
				d="M14 10.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-5 0a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0Z"
			/></svg
		>
	</nav>
	{#if smallNavIsVisible === false}
	<nav
		id="lowerThanXlResolutions"
		class={`flex z-lg relative items-center justify-between px-[5%] w-[100%] m-auto transition-all duration-500 ${$headerStyle} block xl:hidden z-[110] h-[80px]`}
	>
		<a class={` flex-[0.2]`} href="/">
			<span class="text-2xl font-bold font-sans">BASIC/DEPT®</span>
		</a>

		<button on:click={handleNavVisibility} class="text-xl">MENU </button>
	</nav>
	{/if}

	{#if smallNavIsVisible === true}
		<nav
			class={`flex xl:hidden justify-start text-lg absolute h-[100vh] bg-[#262420] w-full items-start p-12 z-[100] transition-all`}
		>
			<figure class="absolute top-16 right-10 text-[#f4f4f4] cursor-pointer">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<svg
					on:click={handleNavVisibility}
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					><path
						fill="currentColor"
						d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"
					/><path
						fill="currentColor"
						d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
					/></svg
				>
			</figure>

			<ul
				class="flex flex-col xl:flex-row justify-center gap-10 p-4 text-4xl text-[#f9cdcd] font-serif items-start"
			>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a on:click={handleNavVisibility} href="/work">WORK</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a on:click={handleNavVisibility} href="/about">ABOUT</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/news') ? 'page' : undefined}>
					<a href="/news">NEWS</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/thinking') ? 'page' : undefined}>
					<a href="/thinking">THINKING</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/careers') ? 'page' : undefined}>
					<a href="/careers">CAREERS</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
					<a href="/contact">CONTACT</a>
				</li>
			</ul>
		</nav>
	{/if}

	<div />
</header>

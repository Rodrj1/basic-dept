<script lang="ts">
	import { headerStyle, scrollValue } from '../store';

	let smallNavIsVisible: boolean = true;

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
	<nav class={`hidden xl:flex z-lg relative items-center justify-between w-[90%]`}>
		<a class="text-2xl font-bold font-sans" href="/"> BASIC/DEPT®</a>

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

	<button
		on:click={handleNavVisibility}
		class={`fixed right-10 text-xl top-[52px] block xl:hidden z-[110] ${$headerStyle}`}
		>MENU
	</button>

	{#if smallNavIsVisible === true}
		<nav
			class={`flex xl:hidden justify-start text-lg absolute h-[100vh] bg-[#262420] w-full items-start p-12 z-[100] transition-all`}
		>
			<ul
				class="flex flex-col xl:flex-row justify-center gap-10 p-4 text-4xl text-[#f9cdcd] font-serif items-start"
			>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a on:click={handleNavVisibility} href="/">WORK</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<a on:click={handleNavVisibility} href="/about">ABOUT</a>
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

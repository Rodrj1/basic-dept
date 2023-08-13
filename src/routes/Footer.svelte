<script lang="ts">
	import { visionImpairedMode } from '../store';
	import { page } from '$app/stores';
</script>

<footer
	class={`flex flex-col gap-14 xl:gap-40 w-full mt-20 xl:mt-40 pt-20 xl:pt-40 justify-center items-center
	${$page.url.pathname === '/' && 'bg-[#252422] text-slate-300'}
	${$page.url.pathname === '/work' && 'bg-[#252422] text-slate-300'}
	${$page.url.pathname === '/about' && 'bg-[#f4f4f4] text-zinc-700'}
	${$page.url.pathname === '/news' && 'bg-[#252422] text-slate-300'}
	${$page.url.pathname === '/thinking' && 'bg-[#f4f4f4] text-zinc-700'}
	${$page.url.pathname === '/careers' && 'bg-[#f4f4f4] text-zinc-700'}
	${$page.url.pathname === '/contact' && 'bg-[#252422] text-slate-300'}
	`}
>
	<div class="flex flex-col xl:flex-row justify-around w-10/12 gap-10 xl:gap-0">
		<span class="text-3xl font-bold w-max flex-1">B/D®</span>

		<p class="text-xl xl:text-3xl font-medium font-sans w-auto flex-1">
			We collaborate with ambitious brands and people.<br class="hidden xl:block" /> Let's build. biz@basicagency.com
		</p>
	</div>

	<div class="flex flex-col xl:flex-row gap-10 xl:gap-0 justify-around w-10/12">
		<div class="flex-1 flex flex-col">
			<span class="text-base xl:text-xl font-medium font-sans">● STAY IN THE KNOW</span>
			<input
				type="email"
				placeholder="Email Address"
				class={`bg-transparent border-b py-5 focus:outline-none w-8/12
				${$page.url.pathname === '/about' && '				placeholder:text-zinc-700 border-zinc-700'}
				${$page.url.pathname === '/' && '				placeholder:text-slate-300 border-slate-300'}
				${$page.url.pathname === '/work' && '				placeholder:text-slate-300 border-slate-300'}
				`}
			/>
		</div>

		<div class="flex-1 flex flex-col gap-7 xl:gap-0 xl:flex-row w-max justify-between">
			<div>
				<h4 class="text-base xl:text-xl mb-7 font-medium font-sans">● SOCIAL</h4>

				<ul class="xl:font-bold text-[13px]">
					<li class="hover:underline">
						<a target="_blank" href="https://www.instagram.com/basicagency/">Instagram</a>
					</li>
					<li class="hover:underline">
						<a target="_blank" href="https://twitter.com/basicagency">Twitter</a>
					</li>
					<li class="hover:underline">
						<a target="_blank" href="https://www.linkedin.com/company/basic-agency/">Linkedin</a>
					</li>
					<li class="hover:underline">
						<a target="_blank" href="https://www.facebook.com/basicagency">Facebook</a>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="text-base xl:text-xl mb-7 font-medium font-sans">● INITIATIVES</h4>

				<ul class="xl:font-bold text-[13px]">
					<li class="hover:underline">
						<a target="_blank" href="https://experiencecrafted.com/">Crafted</a>
					</li>
					<li class="hover:underline"><a target="_blank" href="/thinking">Applied</a></li>
					<li class="hover:underline"><a target="_blank" href="/thinking">Brandbeats</a></li>
					<li class="hover:underline">
						<a target="_blank" href="https://moves.basicagency.com/">Moves</a>
					</li>
					<li class="hover:underline"><a target="_blank" href="/news">B®/Good</a></li>
				</ul>
			</div>

			<div>
				<h4 class="text-base xl:text-xl mb-7 font-medium font-sans">● OFFICES</h4>

				<ul class="xl:font-bold text-[13px]">
					<li class="hover:underline"><a target="_blank" href="/contact">San Diego - CA</a></li>
					<li class="hover:underline"><a target="_blank" href="/contact">New York - NY</a></li>
					<li class="hover:underline"><a target="_blank" href="/contact">Bay Area - CA</a></li>
					<li class="hover:underline"><a target="_blank" href="/contact">St.Louis - MO</a></li>
					<li class="hover:underline"><a target="_blank" href="/contact">Amsterdam - NL</a></li>
					<li class="hover:underline"><a target="_blank" href="/contact">London - EN</a></li>
					<li class="hover:underline"><a target="_blank" href="/contact">Berlin - GE</a></li>
					<li class="hover:underline"><a target="_blank" href="/contact">Argentina - AR</a></li>
				</ul>
			</div>
		</div>
	</div>

	<div
		class={`w-full ${$page.url.pathname === '/' && 'bg-zinc-900 text-gray-500'}
	${$page.url.pathname === '/work' && 'bg-[#191918] text-gray-500'}
	${$page.url.pathname === '/about' && 'bg-[#eaeaea] text-zinc-500'}
	${$page.url.pathname === '/news' && 'bg-[#191918] text-gray-500'}
	${$page.url.pathname === '/thinking' && 'bg-[#eaeaea] text-zinc-500'}
	${$page.url.pathname === '/careers' && 'bg-[#eaeaea] text-zinc-500'}
	${$page.url.pathname === '/contact' && 'bg-[#191918] text-gray-500'}`}
	>
		<div
			class={` w-10/12 flex flex-col xl:flex-row gap-2 xl:gap-0 justify-around font-bold text-xs min-h-[50px] items-center m-auto py-5`}
		>
			<span class="flex-1">BASIC/DEPT®, Inc 10 - 23©</span>
			<span class="flex-1 text-center">EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</span>
			<span class="flex-1 text-right">TERMS, PRIVACY POLICY</span>
		</div>
	</div>
</footer>

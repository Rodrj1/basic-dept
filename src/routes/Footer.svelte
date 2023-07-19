<script lang="ts">
	import { visionImpairedMode } from '../store';
</script>

<footer
	class="flex flex-col gap-14 base:gap-40 w-full mt-20 base:mt-40 pt-20 base:pt-40 bg-zinc-800 text-slate-300 justify-center items-center"
>
	<div class="flex flex-col base:flex-row justify-around w-10/12 gap-10 base:gap-0">
		<span class="text-3xl font-bold w-max flex-1">B/D®</span>

		<p class="text-3xl font-bold w-auto flex-1">
			We collaborate with ambitious brands and people.<br /> Let's build. biz@basicagency.com
		</p>
	</div>

	<div class="flex flex-col base:flex-row gap-10 base:gap-0 justify-around w-10/12">
		<div class="flex-1 flex flex-col">
			<span class="text-xl">● STAY IN THE KNOW</span>
			<input
				type="email"
				placeholder="Email Address"
				class="bg-transparent placeholder:text-slate-300 border-b py-5 focus:outline-none w-8/12"
			/>
		</div>

		<div class="flex-1 flex flex-col gap-7 base:gap-0 base:flex-row w-max justify-between">
			<div>
				<h4 class="text-xl mb-7 font-mono">● SOCIAL</h4>

				<ul>
					<li class="font-bold text-[13px]">Instagram</li>
					<li class="font-bold text-[13px]">Twitter</li>
					<li class="font-bold text-[13px]">Linkedin</li>
					<li class="font-bold text-[13px]">Facebook</li>
				</ul>
			</div>

			<div>
				<h4 class="text-xl mb-7 font-mono">● INITIATIVES</h4>

				<ul>
					<li class="font-bold text-[13px]">Crafted</li>
					<li class="font-bold text-[13px]">Applied</li>
					<li class="font-bold text-[13px]">Brandbeats</li>
					<li class="font-bold text-[13px]">Moves</li>
					<li class="font-bold text-[13px]">B®/Good</li>
				</ul>
			</div>

			<div>
				<h4 class="text-xl mb-7 font-mono">● OFFICES</h4>

				<ul>
					<li class="font-bold text-[13px]">San Diego - CA</li>
					<li class="font-bold text-[13px]">New York - NY</li>
					<li class="font-bold text-[13px]">Bay Area - CA</li>
					<li class="font-bold text-[13px]">St.Louis - MO</li>
					<li class="font-bold text-[13px]">Amsterdam - NL</li>
					<li class="font-bold text-[13px]">London - EN</li>
					<li class="font-bold text-[13px]">Berlin - GE</li>
					<li class="font-bold text-[13px]">Argentina - AR</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="w-full bg-zinc-900">
		<div
			class={`text-gray-500 w-10/12 flex flex-col base:flex-row gap-2 base:gap-0 justify-around font-bold text-xs min-h-[50px] items-center m-auto py-5 ${
				$visionImpairedMode ? 'text-white' : 'text-gray-500'
			}`}
		>
			<span class="flex-1">BASIC/DEPT®, Inc 10 - 23©</span>
			<span class="flex-1 text-center">EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</span>
			<span class="flex-1 text-right">TERMS, PRIVACY POLICY</span>
		</div>
	</div>
</footer>

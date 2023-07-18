<script lang="ts">
	let isOpen: boolean = true;

	const handleAccessibilityMenu = () => {
		const updateStatus = isOpen === true ? false : true;
		isOpen = updateStatus;
	};

	import { visionImpairedMode, ADHDFriendlyMode } from '../store';

	const handleVisionImpairedMode = () => {
		visionImpairedMode.update((val) => !val);
	};

	const handleADHDFriendlyMode = () => {
		ADHDFriendlyMode.update((val) => !val);
	};
</script>

<button
	on:click={handleAccessibilityMenu}
	class="fixed top-10 rounded-full border-2 border-blue-600 bg-zinc-800 text-slate-200 p-2 text-xs"
	aria-label="Open Accessibility Menu">ACCESIBILITY</button
>

<div>
	{#if isOpen}
		<div
			class="bg-zinc-900 fixed top-0 text-slate-200 h-[90vh] w-auto min-w-[50%] p-4 m-4 z-[1000] rounded-xl overflow-y-auto"
		>
			<button on:click={handleAccessibilityMenu} aria-label="Close Accessibility Menu">
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m15.5 15.5l-10-10zm0-10l-10 10"
					/></svg
				>
			</button>

			<div class="flex flex-col gap-6">
				<h1>Accessibility Adjustments</h1>

				<div class="flex gap-4 justify-between">
					<button class="p-3 rounded-full bg-slate-100 text-zinc-800" aria-label="Reset Settings">
						Reset Settings
					</button>

					<button class="p-3 rounded-full bg-slate-100 text-zinc-800" aria-label="Statement">
						Statement
					</button>

					<button class="p-3 rounded-full bg-slate-100 text-zinc-800" aria-label="Hide Interface">
						Hide Interface
					</button>
				</div>

				<div class="flex flex-col gap-5 w-full m-auto bg-slate-100 rounded-xl text-zinc-800 p-3">
					<h2 class="text-xl">Choose the right accessibility profile for you</h2>

					<div class="flex gap-5 justify-between">
						<h3 class="text-lg">Test</h3>

						<div class="flex flex-col gap-4 flex-1 text-right">
							<h4 class="text-lg font-bold">Seizure Safe Profile</h4>
							<p class="text-gray-600 text-base font-serif">Clear flashes & reduces color</p>
						</div>
					</div>

					<div class="flex gap-5 justify-between">
						<button on:click={handleVisionImpairedMode} class="text-lg"
							>{$visionImpairedMode ? 'ON' : 'OFF'}</button
						>

						<div class="flex flex-col gap-4 flex-1 text-right">
							<h4 class="text-lg font-bold">Vision Impaired Profile</h4>
							<p class="text-gray-600 text-base font-serif">Enhances website's visuals</p>
						</div>
					</div>

					<div class="flex gap-5 justify-between">
						<button on:click={handleADHDFriendlyMode} class="text-lg"
							>{$ADHDFriendlyMode ? 'ON' : 'OFF'}</button
						>

						<div class="flex flex-col gap-4 flex-1 text-right">
							<h4 class="text-lg font-bold">ADHD Friendly Profile</h4>
							<p class="text-gray-600 text-base font-serif">More focus & fewer distractions</p>
						</div>
					</div>

					<div class="flex gap-5 justify-between">
						<h3 class="text-lg">Test</h3>

						<div class="flex flex-col gap-4 flex-1 text-right">
							<h4 class="text-lg font-bold">Cognitive Disability profile</h4>
							<p class="text-gray-600 text-base font-serif">Assists with reading & focusing</p>
						</div>
					</div>

					<div class="flex gap-5 justify-between">
						<h3 class="text-lg">Test</h3>

						<div class="flex flex-col gap-4 flex-1 text-right">
							<h4 class="text-lg font-bold">Keyboard Navigation (Motor)</h4>
							<p class="text-gray-600 text-base font-serif">Use website with the keyboard</p>
						</div>
					</div>

					<div class="flex gap-5 justify-between">
						<h3 class="text-lg">Test</h3>

						<div class="flex flex-col gap-4 flex-1 text-right">
							<h4 class="text-lg font-bold">Blind Users (Screen Reader)</h4>
							<p class="text-gray-600 text-base font-serif">Optimize website for screen-readers</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

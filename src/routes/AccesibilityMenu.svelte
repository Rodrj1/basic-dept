<script lang="ts">
	let isOpen: boolean = false;

	const handleAccessibilityMenu = () => {
		const updateStatus = isOpen === true ? false : true;
		isOpen = updateStatus;
	};

	import { visionImpairedMode } from '../store';

	const handleVisionImpairedMode = () => {
		visionImpairedMode.update((val) => !val);

		const getAllElements = document.querySelectorAll('li, h1, a, p, h1 ,h2, h4, span');

		if ($visionImpairedMode === true) {
			getAllElements.forEach((elem) => elem.classList.add('scale-110'));
		} else {
			getAllElements.forEach((elem) => elem.classList.remove('scale-110'));
		}
	};

	import { ADHDFriendlyMode } from '../store';

	const handleADHDFriendlyMode = () => {
		ADHDFriendlyMode.update((val) => !val);
	};

	import { cognitiveDissabilityMode } from '../store';

	let cognitiveLinkStyle = 'outline: 2px solid orange; padding: 2px;';
	let cognitiveParagraphStyle = 'outline: 2px solid blue; padding: 2px;';
	let cognitiveHeaderStyle = 'outline: 2px solid deepskyblue; padding: 2px;';

	const handleCognitiveDisabilityMode = () => {
		cognitiveDissabilityMode.update((val) => !val);

		const getLinks = document.querySelectorAll('a');
		const getParagraphs = document.querySelectorAll('p');
		const getH1Headers = document.querySelectorAll('h1');
		const getH2Headers = document.querySelectorAll('h2');
		const getH4Headers = document.querySelectorAll('h4');

		if ($cognitiveDissabilityMode === true) {
			getLinks.forEach((link) => (link.style.cssText += cognitiveLinkStyle));

			getParagraphs.forEach((paragraph) => (paragraph.style.cssText += cognitiveParagraphStyle));

			getH1Headers.forEach((h1Header) => (h1Header.style.cssText += cognitiveHeaderStyle));

			getH2Headers.forEach((h2Header) => (h2Header.style.cssText += cognitiveHeaderStyle));

			getH4Headers.forEach((h4Header) => (h4Header.style.cssText += cognitiveHeaderStyle));
		} else {
			getLinks.forEach((link) => (link.style.cssText = ''));

			getParagraphs.forEach((paragraph) => (paragraph.style.cssText = ''));

			getH1Headers.forEach((h1Header) => (h1Header.style.cssText = ''));

			getH2Headers.forEach((h2Header) => (h2Header.style.cssText = ''));

			getH4Headers.forEach((h4Header) => (h4Header.style.cssText = ''));
		}
	};

	import { seizureSafeMode } from '../store';

	const handleSeizureSafeMode = () => {
		seizureSafeMode.update((val) => !val);
		const getVideos = document.querySelectorAll('video');

		if ($seizureSafeMode === true) {
			getVideos.forEach((video) => {
				video.pause();
				video.classList.add('grayscale');
			});
		} else {
			getVideos.forEach((video) => {
				video.play();
				video.classList.remove('grayscale');
			});
		}
	};

	const resetSettings = () => {
		if ($seizureSafeMode === true) handleSeizureSafeMode();

		if ($cognitiveDissabilityMode === true) handleCognitiveDisabilityMode();

		if ($visionImpairedMode === true) handleVisionImpairedMode();

		if ($ADHDFriendlyMode === true) handleADHDFriendlyMode();
	};
</script>

<button
	on:click={handleAccessibilityMenu}
	class="fixed bottom-2 flex justify-center flex-col items-center m-1 bg-white rounded-full hover:scale-110 transition-transform"
	aria-label="Open Accessibility Menu"
>
	<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
		><path
			fill="currentColor"
			fill-rule="evenodd"
			d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm0-13a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm-5.707.31a.75.75 0 0 0-.586 1.38l.002.001l.002.001l.01.004l.032.014a15.047 15.047 0 0 0 .572.225c.38.145.914.338 1.527.53c.988.312 2.236.64 3.398.748v1.24c0 .43-.124.853-.357 1.216l-2.524 3.925a.75.75 0 0 0 1.262.812l2.37-3.686l2.368 3.686a.75.75 0 0 0 1.262-.812l-2.524-3.925a2.25 2.25 0 0 1-.357-1.217v-1.239c1.162-.108 2.41-.436 3.399-.748a28.01 28.01 0 0 0 2.098-.755l.033-.014l.01-.004l.002-.001a.75.75 0 0 0-.585-1.381l-.007.003l-.027.011l-.11.045a26.576 26.576 0 0 1-1.864.666c-1.178.37-2.588.715-3.699.715c-1.111 0-2.52-.345-3.698-.715a26.578 26.578 0 0 1-1.974-.711L6.3 9.313l-.006-.003h-.001Z"
			clip-rule="evenodd"
		/></svg
	>
</button>

<div class="overflow-x-hidden">
	{#if isOpen}
		<div
			class="bg-zinc-900 fixed top-0 text-slate-200 h-[90vh] w-11/12 md:w-7/12 xl:w-4/12 p-4 m-4 z-[1000] rounded-xl overflow-y-auto overflow-x-hidden"
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
				<span>Still in development</span>
				<h1 class="text-center">Accessibility Adjustments</h1>

				<button
					on:click={resetSettings}
					class="p-3 rounded-full bg-slate-100 text-zinc-800"
					aria-label="Reset Settings"
				>
					Reset Settings
				</button>

				<div
					class="flex flex-col gap-5 w-full m-auto bg-slate-100 rounded-xl text-zinc-800 p-3 overflow-x-auto"
				>
					<h2 class="text-xl">Choose the right accessibility profile for you</h2>

					<div class="flex gap-5 justify-between">
						<button on:click={handleSeizureSafeMode} class="text-lg"
							>{$seizureSafeMode ? 'ON' : 'OFF'}</button
						>

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
						<button on:click={handleCognitiveDisabilityMode} class="text-lg"
							>{$cognitiveDissabilityMode ? 'ON' : 'OFF'}</button
						>

						<div class="flex flex-col gap-4 flex-1 text-right">
							<h4 class="text-lg font-bold">Cognitive Disability profile</h4>
							<p class="text-gray-600 text-base font-serif">Assists with reading & focusing</p>
						</div>
					</div>

					<div class="flex gap-5 justify-between">
						<button class="text-lg">Not Yet Implemented</button>

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

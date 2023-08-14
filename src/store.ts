import { writable, type Writable } from 'svelte/store';

export let seizureSafeMode: Writable<boolean> = writable(false);

export let visionImpairedMode: Writable<boolean> = writable(false);

export let ADHDFriendlyMode: Writable<boolean> = writable(false);

export let cognitiveDissabilityMode: Writable<boolean> = writable(false);

export let headerStyle: Writable<string> = writable('bg-transparent text-white');

export let scrollValue: Writable<number> = writable(0);

export let projectColletionIsOpen: Writable<boolean> = writable(false);

export const handleProjectCollection = (
	projectSectionIsOpen: boolean,
	projectCollectionSection: HTMLElement | null
) => {
	if (projectCollectionSection) {
		if (projectSectionIsOpen) {
            console.log(projectSectionIsOpen)
			projectCollectionSection.classList.add('opacity-100', 'translate-x-0');
			projectCollectionSection.classList.remove('opacity-0', 'translate-x-full');
		} else {
            console.log(projectSectionIsOpen)
			projectCollectionSection.classList.remove('opacity-100', 'translate-x-0');
			projectCollectionSection.classList.add('opacity-0', 'translate-x-full');
		}
	}
};

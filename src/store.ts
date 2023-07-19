import { writable, type Writable } from 'svelte/store';

export let visionImpairedMode: Writable<boolean> = writable(false);

export let ADHDFriendlyMode: Writable<boolean> = writable(false);

export let cognitiveDissabilityMode: Writable<boolean> = writable(false);

export let headerStyle: Writable<string> = writable('bg-transparent text-white');

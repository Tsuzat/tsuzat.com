<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import './layout.css';
	import Particles from '$lib/components/custom/Particles.svelte';
	import Navbar from '$lib/components/custom/Navbar.svelte';
	let { children } = $props();
</script>

<ModeWatcher />

<Particles class="absolute top-0 left-0 -z-10 h-screen w-screen bg-transparent!" />

<main class="mx-auto max-w-3xl p-4">
	<Navbar />
	{@render children()}
</main>

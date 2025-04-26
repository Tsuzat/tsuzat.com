<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource-variable/open-sans';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<ModeWatcher />

<main class="mx-auto max-w-4xl p-4">
	<Navbar />
	{@render children()}
</main>

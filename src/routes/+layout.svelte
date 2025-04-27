<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource-variable/open-sans';
	import '../app.css';
	import Navbar from '$lib/components/custom/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="description" content="Portfolio and personal website of Tsuzat (Alok Singh)" />

	<meta property="og:site_name" content="Tsuzat" />
	<meta property="og:title" content="Portfolio and personal website of Tsuzat (Alok Singh)" />
	<meta
		property="og:description"
		content="Personal and Portfolio website which contains the professional details about me. The website has some informative blogs in different toppics."
	/>
	<meta property="og:type" content="blog and portfolio" />
	<meta property="og:url" content="https://tsuzat.com" />
</svelte:head>

<ModeWatcher />
<main class="mx-auto max-w-4xl p-4">
	<Navbar />
	{@render children()}
</main>

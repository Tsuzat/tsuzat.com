<script lang="ts">
	import '@fontsource-variable/dm-sans';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/custom/Navbar.svelte';
	import Footer from '$lib/components/custom/Footer.svelte';
	import { onNavigate } from '$app/navigation';

	onNavigate(() => {
		//@ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((fullfill) => {
			//@ts-ignore
			document.startViewTransition(() => new Promise(fullfill));
		});
	});
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

<div class="app max-w-[47.5rem] px-4 m-auto">
	<Navbar />
	<slot />
	<Footer />
</div>

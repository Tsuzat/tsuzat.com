<script lang="ts">
	import '@fontsource-variable/dm-sans';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/custom/navbar.svelte';
	import Footer from '$lib/components/custom/footer.svelte';
	import Sonner from '$lib/components/ui/sonner/sonner.svelte';
	import { Button } from '$lib/components/ui/button';
	import { ArrowUp } from 'lucide-svelte';
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
<Sonner richColors />
<div class="m-auto max-w-3xl p-2">
	<Button
		variant="outline"
		size="icon"
		class="fixed bottom-4 right-4 z-40 rounded-full"
		title="Scroll to top"
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	>
		<ArrowUp />
	</Button>
	<Navbar />
	{@render children()}
	<Footer />
</div>

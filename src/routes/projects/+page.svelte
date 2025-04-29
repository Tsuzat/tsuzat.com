<script lang="ts">
	import Card from '$lib/components/custom/Card.svelte';
	import TextGrow from '$lib/components/custom/TextGrow.svelte';
	import { projects } from '$lib/utils';
</script>

<svelte:head>
	<title>Blogs | Tsuzat</title>
</svelte:head>

<TextGrow text="Projects" duration={0.5} class="mt-12 text-2xl font-bold" />

<div class="animate-load-top fill-mode-both mt-4 flex items-center justify-between delay-500">
	{#each projects as project}
		<Card {project} />
	{/each}
</div>

<p class="mt-8">Expore More...</p>

<script lang="ts">
	import Card from '$lib/components/custom/Card.svelte';
	import TextGrow from '$lib/components/custom/TextGrow.svelte';
	import { projects } from '$lib/utils';
</script>

<svelte:head>
	<title>Blogs | Tsuzat</title>
</svelte:head>

<TextGrow text="Projects" duration={0.5} class="mt-12 text-2xl font-bold" />

<div
	class="animate-load-top fill-mode-both my-4 flex flex-col flex-wrap items-center justify-between delay-500 sm:flex-row"
>
	{#each projects as project}
		<Card {project} />
	{/each}
</div>

<a
	class="animate-load-top fill-mode-both mt-8 font-bold underline delay-500"
	href="https://github.com/Tsuzat"
	target="_blank">Expore More...</a
>

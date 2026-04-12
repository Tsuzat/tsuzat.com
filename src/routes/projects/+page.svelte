<script lang="ts">
	import Card from '$lib/components/custom/Card.svelte';
	import { projects } from '$lib/utils';
</script>

<svelte:head>
	<title>Blogs | Tsuzat</title>
</svelte:head>

<h2
	class="animate-in fade-in zoom-in-95 blur-in-sm fill-mode-both my-4 text-2xl font-bold duration-1000"
>
	Projects
</h2>
<div
	class="animate-load-top fill-mode-both my-4 flex flex-col flex-wrap items-center justify-between delay-500 sm:flex-row"
>
	{#each projects as project (project.title)}
		<Card {project} />
	{/each}
</div>

<a
	class="animate-load-top fill-mode-both mt-8 font-bold underline delay-500"
	href="https://github.com/Tsuzat"
	target="_blank">Expore More...</a
>

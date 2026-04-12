<script lang="ts">
	import ToggleMode from '$lib/components/custom/ToggleMode.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import './layout.css';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import { scale } from 'svelte/transition';
	let { children } = $props();
	const links = ['about', 'blogs', 'projects'];
</script>

<ModeWatcher />

<header class="sticky top-0 mx-auto flex max-w-3xl items-center justify-between p-4">
	<a href={resolve('/')} class="nodefault inline-flex items-center gap-2">
		<img src="/favicon.svg" alt="logo" class="size-8" />
		<span class="hidden text-xl font-bold sm:block">TSUZAT</span>
	</a>
	<div class="hidden items-center gap-4 sm:flex">
		{#each links as link, idx (idx)}
			{@const isActive = page.url.pathname.startsWith(`/${link}`)}
			<a
				href={`/${link}`}
				rel="external"
				class={cn(
					'nodefault group relative z-0 hidden rounded-md px-2 py-1 capitalize sm:block',
					isActive && 'z-1'
				)}
			>
				{#if isActive}
					<div
						transition:scale
						class="absolute inset-0 -z-10 rounded-lg bg-muted-foreground/20 dark:bg-muted"
					></div>
				{/if}
				{link}
			</a>
		{/each}
	</div>
	<div class="inline-flex items-center gap-2">
		<ToggleMode />
		<Button href={resolve('/signin')} class="nodefault">Sign In</Button>
	</div>
</header>
<main class="mx-auto max-w-3xl p-4">
	{@render children()}
</main>

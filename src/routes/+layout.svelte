<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import './layout.css';
	import { resolve } from '$app/paths';
	import Button from '$lib/components/ui/button/button.svelte';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import { scale } from 'svelte/transition';
	import { AnimatedThemeToggler } from '$lib/components/magic/animated-theme-toggler';
	import Particles from '$lib/components/custom/Particles.svelte';
	let { children } = $props();
	const links = ['about', 'blogs', 'projects'];
</script>

<ModeWatcher />
<Particles className="-z-10 fixed top-0 h-screen w-screen" />

<header class="sticky top-0 mx-auto flex max-w-3xl items-center justify-between p-4">
	<a href={resolve('/')} class="nodefault inline-flex items-center gap-2">
		<img src="/favicon.svg" alt="logo" class="size-8" />
		<span class="hidden text-xl font-bold sm:block">Tsuzat</span>
	</a>
	<div class="flex items-center gap-4">
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
						class="absolute inset-0 -z-10 rounded-lg bg-muted-foreground/20 dark:bg-muted/75"
					></div>
				{/if}
				{link}
			</a>
		{/each}
	</div>
	<div class="inline-flex items-center gap-2">
		<AnimatedThemeToggler />
		<Button href={resolve('/signin')} class="nodefault">Sign In</Button>
	</div>
</header>
<main class="mx-auto max-w-3xl p-4">
	{@render children()}
</main>

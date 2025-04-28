<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import { scale } from 'svelte/transition';
	import LottieRender from './LottieRender.svelte';
	import animationData from '$lib/assets/static/logo.json';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { goto } from '$app/navigation';
	import Icons from '../icons';
	import ThemeToggler from './ThemeToggler.svelte';

	const links = ['about', 'blogs', 'projects'];
</script>

<header class="flex items-center justify-between">
	<a href="/" class="inline-flex items-center gap-2">
		<LottieRender {animationData} class="size-10" />
		<span class="font-bold">TSUZAT</span>
	</a>
	<div class="flex items-center gap-4">
		{#each links as link, idx (idx)}
			{@const isActive = page.url.pathname.startsWith(`/${link}`)}
			<a
				href={`/${link}`}
				class={cn(
					'group relative z-0 hidden rounded-md px-2 py-1 capitalize sm:block',
					isActive && 'z-[1]'
				)}
			>
				{#if isActive}
					<div
						transition:scale
						class="dark:bg-muted bg-muted-foreground/20 absolute inset-0 -z-10 rounded-lg"
					></div>
				{/if}
				{link}
			</a>
		{/each}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				class="text-muted-foreground inline-flex cursor-pointer items-center gap-2 sm:hidden"
				title="Navbar Links"
			>
				<Icons.plus class="size-4" />
				<span>Links</span>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="sm:hidden">
				{#each links as link, idx (idx)}
					<DropdownMenu.Item onclick={() => goto(`/${link}`)} class="capitalize">
						{link}
					</DropdownMenu.Item>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		<ThemeToggler />
	</div>
</header>

<script>
	import { page } from '$app/state';
	import Lottie from '$lib/components/custom/lottie.svelte';
	import lottieLogo from '$lib/assets/logo.json';
	import Themeswitcher from './theme-switcher.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { buttonVariants } from '../ui/button';
	import { Plus } from 'lucide-svelte';
	import clsx from 'clsx';
	import { cn } from '$lib/utils';
	import { goto } from '$app/navigation';

	const links = ['about', 'projects', 'blogs'];
</script>

<nav class="flex w-full items-center justify-between py-2">
	<a href="/" class="inline-flex items-center gap-4 text-xl font-bold">
		<Lottie animationData={lottieLogo} class="size-12" />
		<span class="hidden text-muted-foreground sm:block">TSUZAT</span>
	</a>
	<div id="links" class="inline-flex items-center justify-end gap-8">
		{#each links as link}
			<a
				class:current={page.url.pathname.startsWith(`/${link}`)}
				href="/{link}"
				class="hidden capitalize sm:block"
			>
				{link}
			</a>
		{/each}
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				class={buttonVariants({ variant: 'link', class: 'text-muted-foreground sm:hidden' })}
			>
				<Plus /> Links
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each links as link}
					<DropdownMenu.Item
						onclick={() => {
							goto(`/${link}`);
						}}
						class={cn(page.url.pathname.startsWith(`/${link}`) && 'underline', 'capitalize')}
					>
						{link}
					</DropdownMenu.Item>
				{/each}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		<Themeswitcher />
	</div>
</nav>

<style>
	a.current {
		text-decoration: underline !important;
	}
</style>

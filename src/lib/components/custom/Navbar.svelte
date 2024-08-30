<script lang="ts">
	import LottieIcon from './LottieIcon.svelte';
	import animatedData from '$lib/assets/lottie/logo.json';
	import ThemeChanger from './ToggleTheme.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';
</script>

<nav>
	<div class="flex justify-between items-center px-8 py-4">
		<a href="/" class="text-xl flex items-center">
			<LottieIcon animationData={animatedData} class="size-10" />
			<span class="ml-4 text-xl font-bold sm:block hidden">T S U Z A T</span>
		</a>
		<div class="hidden items-center gap-16 sm:flex">
			{#each ['about', 'blogs', 'contact'] as a}
				<a
					aria-current={$page.url.pathname === `/${a}` ? 'page' : undefined}
					class="link text-muted-foreground capitalize aria-[current=page]:text-foreground aria-[current=page]:bg-muted px-2 py-1 rounded-md hover:text-foreground hover:animate-pulse"
					href="/{a}"
				>
					{a}
				</a>
			{/each}
			<ThemeChanger variant="ghost" size="icon" />
		</div>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button builders={[builder]} variant="ghost" class="sm:hidden">+ Menu</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{#each ['about', 'blogs', 'contact'] as a}
					<DropdownMenu.Item
						aria-current={$page.url.pathname === `/${a}` ? 'page' : undefined}
						class="aria-[current=page]:text-foreground aria-[current=page]:bg-accent my-1 text-muted-foreground capitalize"
						href="/{a}"
					>
						{a}
					</DropdownMenu.Item>
				{/each}
				<DropdownMenu.Item class="data-[highlighted]:bg-transparent"
					><ThemeChanger /></DropdownMenu.Item
				>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
</nav>

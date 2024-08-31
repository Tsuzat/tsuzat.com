<script lang="ts">
	import LottieIcon from './LottieIcon.svelte';
	import animatedData from '$lib/assets/lottie/logo.json';
	import ThemeChanger from './ToggleTheme.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';
</script>

<nav>
	<div class="flex justify-between items-center py-4">
		<a href="/" class="text-xl flex items-center">
			<LottieIcon animationData={animatedData} class="size-10" />
			<span class="ml-4 text-xl text-muted-foreground font-bold sm:block hidden">TSUZAT</span>
		</a>
		<div class="hidden items-center justify-between sm:flex w-[50%]">
			{#each ['about', 'blogs', 'contact'] as a}
				<a
					aria-current={$page.url.pathname === `/${a}` ? 'page' : undefined}
					class="link text-muted-foreground capitalize aria-[current=page]:text-foreground aria-[current=page]:bg-muted px-2 py-1 rounded-md hover:text-foreground transition-all"
					href="/{a}"
				>
					{a}
				</a>
			{/each}
			<ThemeChanger variant="ghost" size="icon" />
		</div>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					data-state={builder['data-state']}
					variant="link"
					class="sm:hidden block"
					size="icon"
					id="burger"
				>
					<div
						data-state={builder['data-state']}
						class="menu fixed after:bg-muted-foreground bg-muted-foreground before:bg-muted-foreground"
					></div>
				</Button>
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

<style>
	.menu,
	.menu::before,
	.menu::after {
		content: '';
		display: block;
		height: 2px;
		border-radius: 2px;
		position: absolute;
		transition:
			background ease 0.3s,
			top ease 0.3s 0.3s,
			transform ease 0.3s;
		width: 20px;
	}

	.menu::before {
		top: -6px;
	}
	.menu::after {
		top: 6px;
	}

	.menu[data-state='open']::after {
		transform: rotate(45deg);
		height: 2px;
	}

	.menu[data-state='open']::before {
		transform: rotate(-45deg);
		height: 2px;
	}

	.menu[data-state='open'] {
		width: 0px;
		transition: width 0.2s ease;
	}

	.menu[data-state='open']::after,
	.menu[data-state='open']::before {
		top: 0;
		transition:
			top 0.2s ease,
			transform 0.2s 0.2s ease;
	}
</style>

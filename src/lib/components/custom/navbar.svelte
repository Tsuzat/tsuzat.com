<script>
	import { page } from '$app/state';
	import Lottie from '$lib/components/custom/lottie.svelte';
	import lottieLogo from '$lib/static/logo.json';
	import Themeswitcher from './theme-switcher.svelte';

	const links = ['about', 'projects', 'blogs'];
</script>

<nav class="flex w-full items-center justify-between py-2">
	<a href="/" class="inline-flex items-center gap-4 text-xl font-bold">
		<Lottie animationData={lottieLogo} class="size-12" />
		<span class="hidden text-muted-foreground sm:block">TSUZAT</span>
	</a>
	<div id="links" class="inline-flex items-center justify-end gap-8">
		{#each links as link}
			<a class:current={page.url.pathname === `/${link}`} href="/{link}" class="capitalize">
				{link}
			</a>
		{/each}
		<Themeswitcher />
	</div>
</nav>

<style>
	a.current {
		text-decoration: underline;
	}
</style>

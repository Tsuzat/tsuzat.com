<script lang="ts">
	import { AnimatedThemeToggler } from '$lib/components/magic/animated-theme-toggler';
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import { MotionConfig, createLayoutMotion, STOP_UPDATE } from 'motion-sv';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	const tabs = ['about', 'blogs', 'projects'];
	const layout = createLayoutMotion();
	let activeTab = $derived.by(() => {
		const pathName = page.url.pathname;
		return tabs.find((tab) => pathName.includes(tab)) || '';
	});
	const setTab = layout.update.with((tab: string) => {
		if (tab === activeTab) return STOP_UPDATE;
		activeTab = tab;
	});
</script>

<header class="flex items-center justify-between">
	<a href={resolve('/')} class="nodefault inline-flex items-center gap-2">
		<!-- <LottieRender {animationData} class="size-10" /> -->
		<img src="/favicon.svg" alt="TSUZAT" class="size-12" />
		<span class="text-xl font-bold">TSUZAT</span>
	</a>
	<MotionConfig transition={{ type: 'spring', bounce: 0, duration: 0.4 }}>
		<layout.ul class="flex items-center gap-4" onmouseleave={() => setTab('')}>
			{#each tabs as tab (tab)}
				<layout.li
					class={[
						'relative cursor-pointer list-none px-2 py-1 transition-colors outline-none',
						activeTab === tab ? 'text-foreground' : 'text-muted-foreground'
					]}
					tabindex={0}
					onfocus={() => setTab(tab)}
					onclick={() => goto(resolve(`/${tab}`))}
					onmouseenter={() => setTab(tab)}
					onmouseleave={() => setTab(tab)}
				>
					{#if activeTab === tab}
						<layout.div
							layoutId="tab-indicator"
							class="absolute inset-0 rounded-lg bg-muted dark:bg-muted/70"
						/>
					{/if}
					<span class="relative text-inherit capitalize">{tab}</span>
				</layout.li>
			{/each}
		</layout.ul>
	</MotionConfig>
	<div class="inline-flex items-center gap-2">
		<AnimatedThemeToggler />
		<Button href={resolve('/signin')} class="nodefault">Sign In</Button>
	</div>
</header>

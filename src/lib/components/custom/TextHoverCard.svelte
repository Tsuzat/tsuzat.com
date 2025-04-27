<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import { fly, slide } from 'svelte/transition';

	interface Props {
		text: string;
		children: Snippet<[]>;
		href?: string;
		class?: string;
		classText?: string;
	}

	const { text, children, href, class: className = '', classText }: Props = $props();
</script>

<HoverCard.Root openDelay={100} closeDelay={100}>
	<HoverCard.Trigger
		{href}
		target="_blank"
		rel="noreferrer noopener"
		class={cn(classText, 'font-bold')}>{text}</HoverCard.Trigger
	>
	<HoverCard.Content class={cn('w-fit', className)}>
		{@render children()}
	</HoverCard.Content>
</HoverCard.Root>

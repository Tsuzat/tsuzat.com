<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	interface Props {
		slug: string;
		title: string;
		summary: string;
		publishedAt: string;
		readTime: number;
	}

	const { slug, title, summary, publishedAt, readTime }: Props = $props();

	import * as Card from '$lib/components/ui/card';
	import { CalendarDays } from '@lucide/svelte';
</script>

<Card.Root
	onclick={() => goto(resolve('/blogs/[name]', { name: slug }))}
	class="bg-background hover:bg-muted dark:hover:bg-muted/50 scale-100 cursor-pointer  border-0 p-2! shadow-none transition-all duration-500 hover:scale-102"
>
	<Card.Content class="flex flex-col gap-2 p-0">
		<div class="text-xl font-bold text-balance">
			{title}
		</div>
		<div class="inline-flex items-center gap-2">
			<span class="text-muted-foreground">{readTime} min read</span>
			<span class="text-muted-foreground">·</span>
			<span class="flex items-center gap-2"><CalendarDays class="size-4" /> {publishedAt}</span>
		</div>
		<div>
			<p class="text-muted-foreground text-sm">{summary}</p>
		</div>
	</Card.Content>
</Card.Root>

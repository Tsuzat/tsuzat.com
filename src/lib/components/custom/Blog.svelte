<script lang="ts">
	import { goto } from '$app/navigation';

	interface Props {
		slug: string;
		title: string;
		summary: string;
		publishedAt: string;
		readTime: number;
	}

	const { slug, title, summary, publishedAt, readTime }: Props = $props();

	import * as Card from '$lib/components/ui/card';
</script>

<Card.Root
	onclick={() => goto(`/blogs/${slug}`)}
	class="bg-background scale-100 cursor-pointer border-0 !p-1 shadow-none transition-all duration-500 hover:scale-[102%]"
>
	<Card.Content class="p-0">
		<div class="flex flex-wrap items-center gap-4">
			<span>{publishedAt}</span>
			<span class="font-bold">{title}</span>
			<span class="text-muted-foreground ml-auto">{readTime} min</span>
		</div>
		<div>
			<p class="text-muted-foreground text-sm">{summary}</p>
		</div>
	</Card.Content>
</Card.Root>

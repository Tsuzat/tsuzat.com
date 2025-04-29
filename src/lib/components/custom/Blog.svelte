<script lang="ts">
	import { goto } from '$app/navigation';

	interface Props {
		slug: string;
		title: string;
		summary: string;
		publishedAt: string;
	}

	const { slug, title, summary, publishedAt }: Props = $props();

	import * as Card from '$lib/components/ui/card';
</script>

<Card.Root
	onclick={() => goto(`/blogs/${slug}`)}
	class="bg-background scale-100 cursor-pointer border-0 !p-1 shadow-none transition-all duration-500 hover:scale-[102%]"
>
	<Card.Content class="p-0">
		<div class="flex items-center gap-4">
			<span>{publishedAt}</span>
			<span class="font-bold">{title}</span>
		</div>
		<div>
			<p class="text-muted-foreground text-sm">{summary}</p>
		</div>
	</Card.Content>
</Card.Root>

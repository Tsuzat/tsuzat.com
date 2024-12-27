<script lang="ts">
	import { formatDate, type MarkdownPostMetadataAndSlug } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import { goto } from '$app/navigation';
	import { Calendar } from 'lucide-svelte';

	interface Props {
		post: MarkdownPostMetadataAndSlug;
	}

	let { post }: Props = $props();
</script>

<Card.Root
	class="py-4 transition-all duration-500 hover:scale-[101%] hover:cursor-pointer sm:flex"
	onclick={() => {
		goto(`/blogs/${post.slug}`);
	}}
>
	<Card.Content class="flex">
		<div id="content" class="*:py-1">
			<div class="text-2xl font-bold">{post.metadata.title}</div>
			<p class="flex items-center text-sm text-muted-foreground">
				<Calendar class="mr-2 size-4" />
				<span>
					Published: {formatDate(post.metadata.publishedAt)}
				</span>
			</p>
			<p class="text-sm text-muted-foreground">{post.metadata.summary}</p>
		</div>
	</Card.Content>
</Card.Root>

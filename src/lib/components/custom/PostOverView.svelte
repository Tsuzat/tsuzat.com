<script lang="ts">
	import { formatDate, type MarkdownPostMetadataAndSlug } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import { Icons } from '$lib/components/custom/icons';
	import { goto } from '$app/navigation';

	export let post: MarkdownPostMetadataAndSlug;

	console.log(post.metadata.imgUrl);
</script>

<Card.Root
	class="hover:scale-105 transition-all duration-500 hover:cursor-pointer sm:flex py-4"
	on:click={() => {
		goto(`/blogs/${post.slug}`);
	}}
>
	<Card.Content class="flex">
		<!-- <div id="cover" class="sm:max-w-64 flex items-center justify-center">
			<img src={post.metadata.imgUrl} alt={post.metadata.title} class="max-w-64 object-cover" />
		</div> -->
		<div id="content" class="*:py-1">
			<div class="text-2xl font-bold">{post.metadata.title}</div>
			<p class="text-muted-foreground text-sm flex items-center">
				<Icons.calendar class="size-4 mr-2" />
				<span>
					Published: {formatDate(post.metadata.publishedAt)}
				</span>
			</p>
			<p class="text-sm text-muted-foreground">{post.metadata.summary}</p>
		</div>
	</Card.Content>
</Card.Root>

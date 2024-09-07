<script lang="ts">
	import type { MarkdownPostMetadataAndSlug } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';

	export let post: MarkdownPostMetadataAndSlug;

	console.log(post.metadata.imgUrl);
</script>

<Card.Root
	class="hover:scale-105 transition-all duration-500 hover:cursor-pointer flex"
	on:click={() => {}}
>
	<Card.Header class="">
		<img src={post.metadata.imgUrl} alt={post.metadata.title} class="w-48" />
	</Card.Header>
	<Card.Content>
		<div>{post.metadata.title}</div>
		<p>{post.metadata.summary}</p>
	</Card.Content>
</Card.Root>

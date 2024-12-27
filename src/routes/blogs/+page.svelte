<script lang="ts">
	import type { PageData } from './$types';
	import PostOverview from '$lib/components/custom/post-overview.svelte';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const posts = data.posts;
</script>

<svelte:head>
	<title>Blogs | Tsuzat</title>
</svelte:head>

<div>
	<h1 class="pb-4 text-2xl font-bold">BLOG POSTS</h1>
	<div class="*:my-4">
		{#each posts as post}
			<PostOverview {post} />
		{/each}
	</div>
</div>

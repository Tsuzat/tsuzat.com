<script lang="ts">
	import PostOverView from '$lib/components/custom/PostOverView.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	const posts = data.posts;
</script>

<svelte:head>
	<title>Blogs | Tsuzat</title>
</svelte:head>

<div>
	<h1 class="pb-4 text-2xl">BLOG POSTS</h1>
	<div class="*:my-4">
		{#each posts as post}
			<PostOverView {post} />
		{/each}
	</div>
</div>

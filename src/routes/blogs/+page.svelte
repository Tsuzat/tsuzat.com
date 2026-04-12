<script lang="ts">
	import Blog from '$lib/components/custom/Blog.svelte';
	const { data } = $props();
</script>

<svelte:head>
	<title>Blogs | Tsuzat</title>
</svelte:head>

<h2
	class="animate-in fade-in zoom-in-95 blur-in-sm fill-mode-both my-4 text-2xl font-bold duration-1000"
>
	Blogs
</h2>
<div class="animate-load-top fill-mode-both mt-4 flex flex-col gap-8 delay-500">
	{#each data.posts as post, idx (idx)}
		<Blog
			slug={post.slug}
			title={post.metadata.title}
			summary={post.metadata.summary}
			publishedAt={post.metadata.publishedAt}
			readTime={post.metadata.readTime}
		/>
	{/each}

	<p>More upcoming...</p>
</div>

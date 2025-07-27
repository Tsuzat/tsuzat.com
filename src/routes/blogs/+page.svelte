<script lang="ts">
	import Blog from '$lib/components/custom/Blog.svelte';
	import TextGrow from '$lib/components/custom/TextGrow.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>Blogs | Tsuzat</title>
</svelte:head>

<TextGrow text="Blogs" duration={0.5} class="mt-12 text-2xl font-bold" />

<div class="animate-load-top fill-mode-both mt-4 flex flex-col gap-8 delay-500">
	{#each data.posts as post}
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

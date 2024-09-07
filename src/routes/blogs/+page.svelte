<script lang="ts">
	import type { post } from '$lib/utils';

	export let data;

	console.log(data.posts.length);

	let posts: post[] = [];
	for (let t of data.posts) {
		if (!t.metadata.production) continue;
		let tmp: post = {
			date: new Date(t.metadata.publishedAt),
			img: t.metadata.imgUrl,
			title: t.metadata.title,
			blogUrl: t.slug,
			readTime: t.metadata.readTime,
			summary: t.metadata.summary
		};
		posts.push(tmp);
	}
</script>

<svelte:head>
	<title>Blogs | Tsuzat</title>
</svelte:head>

<div>
	<h1>Blogs</h1>
	{#each posts as post}
		<a href="/blogs/{post.blogUrl}">
			<div class="card my-8">
				<div class="card-body">
					<div class="card-title text-xl">{post.title}</div>
					<div class="card-text">{post.summary}</div>
					<div class="card-actions">
						<div class="card-action">
							<div class="card-action-text">Read....</div>
						</div>
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>

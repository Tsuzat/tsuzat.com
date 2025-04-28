<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { page } from '$app/state';
	import './+page.css';
	import CodeInjector from '$lib/components/custom/CodeInjector.svelte';
	import Icons from '$lib/components/icons';
	import Comment from '$lib/components/custom/Comment.svelte';
	import { Views } from './views.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Avatar } from '$lib/components/ui/avatar';
	import Comments from './comments.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const views = new Views();
	const comments = new Comments();

	$effect(() => {
		console.log(data.metadata.id);
		views.fetchViews(data.metadata.id).then(() => {
			views.updateViews(data.metadata.id);
		});
		comments.fetchComments(data.metadata.id);
	});

	onMount(async () => {
		// Find the code tags
		const codeTags = document.querySelectorAll('code');
		codeTags.forEach((codeTag) => {
			if (codeTag.parentElement && codeTag.parentElement.tagName === 'PRE') return;
			codeTag.classList.add('bg-muted', 'text-foreground');
		});

		const blockQuotes = document.querySelectorAll('blockquote');
		blockQuotes.forEach((blockQuote) => {
			const tagClass = blockQuote.textContent?.split(':')[0] || '';
			switch (tagClass) {
				case 'Warning':
					blockQuote.classList.add(
						'!border-l-orange-500/80',
						'bg-orange-500/[15%]',
						'text-orange-500'
					);
					break;
				case 'Error':
					blockQuote.classList.add('!border-l-red-500/80', 'bg-red-500/[15%]', 'text-red-500');
					break;
				case 'Info':
					blockQuote.classList.add(
						'!border-l-green-500/80',
						'bg-green-500/[15%]',
						'text-green-500'
					);
					break;
				default:
					break;
			}
		});
		// Add ID to all headings
		const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
		headings.forEach((heading) => {
			if (!heading.textContent) return;
			// remove spaces and special characters with regex by replacing them with '-'
			heading.id = heading.textContent
				.replace(/[^a-zA-Z0-9 -]/g, '')
				.replace(/\s+/g, '-')
				.toLowerCase();
		});
	});
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.summary} />
	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:type" content="article" />
	<meta property="og:description" content={data.metadata.summary} />
	<meta property="og:image" content={data.metadata.imgUrl} />
	<meta property="og:url" content={page.url.href} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="animate-load-top fill-mode-both mt-12 mb-8 w-full delay-500">
	<h1 class="text-3xl font-bold">{data.metadata.title}</h1>
	<p class="text-muted-foreground my-2 flex flex-wrap items-center gap-4">
		<span class="flex items-center gap-2">
			<Icons.calendar class="size-4" />
			<span>
				{data.metadata.publishedAt}
			</span>
		</span>
		<span class="flex items-center gap-2">
			<Icons.clock class="size-4" />
			<span>
				{data.metadata.readTime} mins
			</span>
		</span>
		<span class="flex items-center gap-2">
			<Icons.eye class="size-4" />
			<span>
				{views.getViews()} views
			</span>
		</span>
	</p>
	<p class="text-muted-foreground my-4">{data.metadata.summary}</p>
	<hr />

	<div class="post prose dark:prose-invert my-4 min-w-full">
		<CodeInjector>
			<data.post />
		</CodeInjector>
	</div>

	<hr />

	<h2 class="my-4 text-xl font-bold">Comments</h2>
	{#if data.user}
		{@const userId = data.user.id}
		<Comment
			user={data.user}
			onSubmit={async (content) => {
				await comments.addComment(content, data.metadata.id, userId);
			}}
		/>
	{:else}
		<Button variant="secondary" href="/login/github">
			<Icons.github />
			Sign In with Github to Comment
		</Button>
	{/if}
	<div class="flex flex-col gap-4">
		{#each comments.getComments() as comment}
			{@html comment.content}
		{/each}
	</div>
</div>

<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { page } from '$app/state';
	import '@fontsource-variable/fira-code';
	import CodeInjection from '$lib/components/custom/code-injection.svelte';
	import { Calendar, Clock } from 'lucide-svelte';
	import './page.css';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

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

<div class="w-full">
	<h1 class="text-3xl font-bold">{data.metadata.title}</h1>
	<p class="my-2 flex items-center text-sm text-muted-foreground">
		<Calendar class="mr-2 size-4" />
		<span>
			{formatDate(data.metadata.publishedAt)}
		</span>
		<Clock class="ml-4 mr-2 size-4" />
		<span>
			{data.metadata.readTime} mins
		</span>
	</p>
	<p class="my-2 text-sm text-muted-foreground">{data.metadata.summary}</p>
	<Separator class="my-4" />

	<div class="post prose my-4 min-w-full dark:prose-invert prose-a:to-blue-600">
		<CodeInjection>
			<data.post />
		</CodeInjection>
	</div>
</div>

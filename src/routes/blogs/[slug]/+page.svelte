<script lang="ts">
	import { Icons } from '$lib/components/custom/icons';
	import { Separator } from '$lib/components/ui/separator';
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import '@fontsource-variable/fira-code';

	export let data: PageData;

	onMount(async () => {
		const codeTags = document.querySelectorAll('code');
		if (codeTags) {
			codeTags.forEach((tag) => {
				if (tag.parentElement?.tagName === 'PRE') return;
				tag.classList.add('text-forground', 'bg-muted');
			});
		}
	});
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="description" content={data.metadata.summary} />
	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:type" content="article" />
	<meta property="og:description" content={data.metadata.summary} />
	<meta property="og:image" content={data.metadata.imgUrl} />
	<meta property="og:url" content={$page.url.href} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="w-full">
	<h1 class="text-3xl font-bold">{data.metadata.title}</h1>
	<p class="text-muted-foreground text-sm flex items-center my-2">
		<Icons.calendar class="size-4 mr-2" />
		<span>
			Published: {formatDate(data.metadata.publishedAt)}
		</span>
		<Icons.clock class="size-4 ml-4 mr-2" />
		<span>
			Read Time: {data.metadata.readTime} mins
		</span>
	</p>
	<p class="text-sm my-2 text-muted-foreground">{data.metadata.summary}</p>
	<Separator class="my-4" />

	<div class="post my-4 prose dark:prose-invert">
		<svelte:component this={data.post} />
	</div>
</div>

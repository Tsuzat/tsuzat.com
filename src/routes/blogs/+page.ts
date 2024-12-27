import type { MarkdownPostMetadataAndSlug } from '$lib/utils';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/posts');
	const posts: MarkdownPostMetadataAndSlug[] = await response.json();
	return {
		posts
	};
};

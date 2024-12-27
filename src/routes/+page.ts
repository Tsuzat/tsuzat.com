export const prerender = true;
export const ssr = true;

import type { MarkdownPostMetadataAndSlug } from '$lib/utils';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// get posts from api with sveltekit special fetch
	const response = await fetch('/api/posts');

	let posts: MarkdownPostMetadataAndSlug[] = await response.json();

	// Return top 3 posts as recents
	if (posts.length > 3) posts = posts.slice(0, 3);

	return {
		posts
	};
};

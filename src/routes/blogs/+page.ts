import type { MarkdownPostMetadataAndSlug } from '$lib/utils';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
	// get posts from api with sveltekit special fetch
	const response = await fetch('/api/posts');

	const posts: MarkdownPostMetadataAndSlug[] = await response.json();

	console.log(posts.length);

	return {
		posts
	};
};

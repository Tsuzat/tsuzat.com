import type { MarkdownPostMetadataAndSlug } from '$lib/utils';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// get posts from api with sveltekit special fetch
	const response = await fetch('/api/posts');
	let posts: MarkdownPostMetadataAndSlug[] = await response.json();
	// Return top 2 posts as recents
	if (posts.length > 2) posts = posts.slice(0, 2);

	return {
		posts
	};
};

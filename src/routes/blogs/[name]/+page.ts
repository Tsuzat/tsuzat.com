import type { MarkdownPost } from '$lib/utils';
import type { PageLoad } from './$types';

export const prerender = 'auto';

export const load: PageLoad = async ({ params }) => {
	const slug = params.name;

	const markDownPost: MarkdownPost = await import(`../../../posts/${slug}.md`);

	console.log('Got the data', markDownPost.metadata);

	return {
		metadata: markDownPost.metadata,
		post: markDownPost.default
	};
};

import type { PageLoad } from './$types';
import type { MarkdownPost } from '$lib/utils';

export const prerender = 'auto';

export const load: PageLoad = async ({ params }) => {
	const slug = params.name;

	const markDownPost: MarkdownPost = await import(`../../../posts/${slug}.md`);

	return {
		metadata: markDownPost.metadata,
		post: markDownPost.default
	};
};

import type { PageLoad } from './$types';
import type { MarkdownPost } from '$lib/utils';

export const ssr = true;

export const load: PageLoad = async ({ params }) => {
  const slug = params.slug;

  const markDownPost: MarkdownPost = await import(`../../../posts/${slug}.md`);

  return {
    metadata: markDownPost.metadata,
    post: markDownPost.default
  };
};

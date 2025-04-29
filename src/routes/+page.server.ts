import type { MarkdownPostMetadataAndSlug } from '$lib/utils';
import { fail, redirect } from '@sveltejs/kit';
import { invalidateSession, deleteSessionTokenCookie } from '$lib/server/auth';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	// get posts from api with sveltekit special fetch
	const response = await fetch('/api/posts');
	let posts: MarkdownPostMetadataAndSlug[] = await response.json();
	// Return top 2 posts as recents
	if (posts.length > 2) posts = posts.slice(0, 2);

	return {
		posts
	};
};

export const actions: Actions = {
	default: async (event) => {
		if (event.locals.session === null) {
			return fail(401);
		}
		await invalidateSession(event.locals.session.id);
		deleteSessionTokenCookie(event);
		redirect(302, '/');
	}
};

import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const ssr = true;
export const prerender = false;

export const load: PageServerLoad = (event) => {
	if (event.locals.user) {
		return redirect(302, '/');
	}
	return {};
};

export const actions: Actions = {
	signInSocial: async (event) => {
		const { auth } = event.locals;
		const result = await auth.api.signInSocial({
			body: {
				provider: 'github',
				callbackURL: '/'
			}
		});
		if (result.url) {
			return redirect(302, result.url);
		}
		return fail(400, { message: 'Social sign-in failed' });
	}
};

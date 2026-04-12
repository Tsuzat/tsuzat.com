import { error, redirect } from '@sveltejs/kit';

export const GET = async (event) => {
	const { auth } = event.locals;
	const res = await auth.api.signOut({
		headers: event.request.headers
	});
	if (!res.success) {
		return error(500, 'Unable to sign out. Please try again later.');
	}
	return redirect(302, '/');
};

import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_RESUME_URL } from '$env/static/public';

export const GET: RequestHandler = async () => {
	return redirect(301, PUBLIC_RESUME_URL);
};

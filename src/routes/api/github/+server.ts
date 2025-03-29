import { GITHUB_PAT } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { username, repo } = await request.json();
	const req = new Request(`https://api.github.com/repos/${username}/${repo}`);
	req.headers.set('Authorization', `Bearer ${GITHUB_PAT}`);
	const response = await fetch(req);
	if (!response.ok) {
		return new Response('Something went wrong', { status: 500 });
	}
	try {
		const data = await response.json();
		const res = { stars: data.stargazers_count.toString() };
		return json(res);
	} catch (error) {
		console.error(error);
		return new Response('Something went wrong', { status: 500 });
	}
};

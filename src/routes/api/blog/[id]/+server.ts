import { db } from '$lib/server/db';
import { blogs } from '$lib/server/db/schema';
import { json, type RequestHandler } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;
	if (!id) return new Response(JSON.stringify({ message: 'Id not found' }), { status: 404 });
	const [blogData] = await db.select().from(blogs).where(eq(blogs.id, id)).execute();
	if (!blogData)
		return new Response(JSON.stringify({ message: 'Blog not found' }), {
			status: 404
		});
	return json(blogData, { status: 200 });
};

export const PATCH: RequestHandler = async ({ params, request }) => {
	const { id } = params;
	if (!id) return new Response(JSON.stringify({ message: 'Id not found' }), { status: 404 });
	interface Views {
		views: number;
	}
	try {
		const views: Views = await request.json();
		await db.update(blogs).set({ views: views.views }).where(eq(blogs.id, id)).execute();
		return json({ message: 'Success' }, { status: 200 });
	} catch (error) {
		console.error(error);
		return json({ message: 'Something went wrong' }, { status: 500 });
	}
};

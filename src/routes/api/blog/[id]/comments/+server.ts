import { json, type RequestHandler } from '@sveltejs/kit';
import { comments, type Comment } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import { eq, sql } from 'drizzle-orm';

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;
	if (!id) return new Response(JSON.stringify({ message: 'Id not found' }), { status: 404 });
	const blogComments = await db
		.select()
		.from(comments)
		.where(eq(comments.blogId, id))
		.orderBy(comments.createdAt)
		.execute();
	return json({ comments: blogComments }, { status: 200 });
};

export const PUT: RequestHandler = async ({ params, request }) => {
	const { id } = params;
	if (!id) return new Response(JSON.stringify({ message: 'Id not found' }), { status: 404 });
	interface CommentRequest {
		content: string;
		userId: string;
		blogId: string;
	}
	try {
		const commentRequest: CommentRequest = await request.json();
		const [addedComment] = await db
			.insert(comments)
			.values({
				content: commentRequest.content,
				userId: commentRequest.userId,
				blogId: commentRequest.blogId
			})
			.returning();
		return json({ ...addedComment }, { status: 200 });
	} catch (error) {
		console.error(error);
		return json({ message: 'Something went wrong' }, { status: 500 });
	}
};

export const PATCH: RequestHandler = async ({ params, request }) => {
	const { id } = params;
	if (!id) return new Response(JSON.stringify({ message: 'Id not found' }), { status: 404 });
	try {
		const commentRequest: Comment = await request.json();
		const addedComment = await db
			.update(comments)
			.set({ content: commentRequest.content, updatedAt: sql`NOW()` })
			.where(eq(comments.id, commentRequest.id));
		return json({ ...addedComment }, { status: 200 });
	} catch (error) {
		console.error(error);
		return json({ message: 'Something went wrong' }, { status: 500 });
	}
};

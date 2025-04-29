import { db } from '$lib/server/db';
import { user as userTable } from '$lib/server/db/schema';
import { json, type RequestHandler } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;
	if (!id) return json({ message: 'Id is not provided' }, { status: 403 });
	const [user] = await db.select().from(userTable).where(eq(userTable.id, id)).execute();
	if (!user) return json({ message: 'User not found' }, { status: 404 });
	return json({ ...user }, { status: 200 });
};

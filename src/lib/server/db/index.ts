import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import { eq } from 'drizzle-orm';
import { DATABASE_URL } from '$env/static/private';

const client = neon(DATABASE_URL);

export const db = drizzle(client, { schema });

export async function getUserFromGitHubId(githubId: string) {
	try {
		const [user] = await db
			.select({
				id: schema.user.id,
				username: schema.user.username,
				avatarUrl: schema.user.avatarUrl
			})
			.from(schema.user)
			.where(eq(schema.user.id, githubId));
		return user;
	} catch (e) {
		console.error(e);
		return null;
	}
}

export async function createUser(githubId: string, username: string, avatarUrl: string) {
	const user: schema.User = {
		id: githubId,
		username,
		avatarUrl
	};
	await db.insert(schema.user).values(user);
	return user;
}

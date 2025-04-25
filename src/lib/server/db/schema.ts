import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const blogs = pgTable('blogs', {
	id: serial('id').primaryKey(),
	title: text('title'),
	counts: integer('counts')
});

export const comments = pgTable('comments', {
	id: serial('id').primaryKey(),
	blogId: integer('blog_id').references(() => blogs.id),
	content: text('content')
});

export const likes = pgTable('likes', {
	id: serial('id').primaryKey(),
	blogId: integer('blog_id').references(() => blogs.id),
	userId: text('user_id').references(() => user.id)
});

export const user = pgTable('users', {
	id: text('github_id').notNull().unique().primaryKey(),
	username: text('username').notNull().unique(),
	avatarUrl: text('avatar_url').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;

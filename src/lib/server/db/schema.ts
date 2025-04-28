import { pgTable, serial, text, integer, timestamp, uuid } from 'drizzle-orm/pg-core';

export const blogs = pgTable('blogs', {
	id: uuid('id').primaryKey().defaultRandom(),
	title: text('title'),
	views: integer('views')
});

export const comments = pgTable('comments', {
	id: uuid('id').primaryKey().defaultRandom(),
	blogId: uuid('blog_id')
		.references(() => blogs.id)
		.notNull(),
	content: text('content').notNull(),
	userId: text('user_id')
		.references(() => user.id)
		.notNull(),
	createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).notNull().defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'date' }).notNull().defaultNow()
});

export const likes = pgTable('comments_likes', {
	id: serial('id').primaryKey(),
	commentId: uuid('comment_id').references(() => comments.id),
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

export type Blog = typeof blogs.$inferSelect;

export type Comment = typeof comments.$inferSelect;

export type Like = typeof likes.$inferSelect;

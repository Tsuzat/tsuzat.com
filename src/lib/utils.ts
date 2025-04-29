import { type ClassValue, clsx } from 'clsx';
import type { ComponentType } from 'svelte';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type MarkdownPost = {
	metadata: {
		id: string;
		title: string;
		imgUrl: string;
		publishedAt: string;
		summary: string;
		production: boolean;
		readTime: number;
	};
	default: ComponentType;
};

export type MarkdownPostMetadataAndSlug = {
	slug: string;
	metadata: MarkdownPost['metadata'];
};

export function timeAgo(date: Date) {
	const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
	let interval = Math.floor(seconds / 31536000);

	if (interval > 1) {
		return `${interval} years ago`;
	}
	interval = Math.floor(seconds / 2592000);
	if (interval > 1) {
		return `${interval} months ago`;
	}
	interval = Math.floor(seconds / 86400);
	if (interval > 1) {
		return `${interval} days ago`;
	}
	interval = Math.floor(seconds / 3600);
	if (interval > 1) {
		return `${interval} hours ago`;
	}
	interval = Math.floor(seconds / 60);
	if (interval > 1) {
		return `${interval} minutes ago`;
	}
	return 'just now';
}

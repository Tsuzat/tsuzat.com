import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// utils for markdown posts
import type { ComponentType } from 'svelte';

export type MarkdownPost = {
	metadata: {
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

export type post = {
	date: Date;
	img: string;
	title: string;
	blogUrl: string;
	readTime: number;
	summary: string;
};

// Function to format date YYYY-MM-DD to Month DD, YYYY
export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

// Function to return the time gap between two dates in Years & Months
export function getTimeGap(startDate: string, endDate: string) {
	const start = new Date(startDate);
	const end = new Date(endDate);

	const diffInYears = end.getFullYear() - start.getFullYear();
	const diffInMonths = end.getMonth() - start.getMonth();

	let diff = '';
	if (diffInYears > 0) {
		diff = `${diffInYears} Years `;
	}
	if (diffInMonths > 0) {
		diff += `${diffInMonths} Months`;
	}
	return diff;
}

export interface Project {
	name: string;
	description: string;
	url: string;
	stars?: string | number | null;
	badges?: string[];
}

/**
 * Fetches the number of stars for a GitHub repository
 * @param username - username of the repository owner
 * @param repo - repository name
 * @returns Promise<string> - stars count
 */
export async function getGithubStars(username: string, repo: string): Promise<string> {
	const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
	const data = await response.json();
	return data.stargazers_count.toString();
}

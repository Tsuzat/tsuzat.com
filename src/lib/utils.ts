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

/**
 * Returns a human-readable string representing how long ago the given date was
 * @param isoString - ISO 8601 formatted date string
 * @returns Human-readable time difference string
 */
export function timeAgo(date: Date): string {
	const now = new Date();

	// Time difference in milliseconds
	const diffMs = now.getTime() - date.getTime();

	// Convert to seconds
	const diffSec = Math.floor(diffMs / 1000);

	// Less than 10 seconds
	if (diffSec < 10) {
		return 'Just Now';
	}

	// Less than 1 hour
	if (diffSec < 3600) {
		const minutes = Math.floor(diffSec / 60);
		return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
	}

	// Less than 24 hours
	if (diffSec < 86400) {
		const hours = Math.floor(diffSec / 3600);
		return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
	}

	// Check if it's yesterday
	const yesterday = new Date(now);
	yesterday.setDate(now.getDate() - 1);
	if (
		date.getDate() === yesterday.getDate() &&
		date.getMonth() === yesterday.getMonth() &&
		date.getFullYear() === yesterday.getFullYear()
	) {
		return 'Yesterday';
	}

	// Format for different years vs same year
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	// Get the day with suffix (1st, 2nd, 3rd, etc.)
	const day = date.getDate();
	const daySuffix = getDaySuffix(day);

	// Different year
	if (date.getFullYear() !== now.getFullYear()) {
		return `${day}${daySuffix} ${months[date.getMonth()]} ${date.getFullYear()}`;
	}

	// Same year
	return `${day}${daySuffix} ${months[date.getMonth()]}`;
}

/**
 * Helper function to get the appropriate suffix for a day number
 * @param day - Day of the month (1-31)
 * @returns The appropriate suffix (st, nd, rd, or th)
 */
function getDaySuffix(day: number): string {
	if (day >= 11 && day <= 13) {
		return 'th';
	}

	switch (day % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}

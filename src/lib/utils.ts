import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

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

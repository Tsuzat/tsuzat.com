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

	let timeDiff = end.getTime() - start.getTime();
	let diffInYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
	let diffInMonths = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));

	let diff = '';
	if (diffInYears > 0) {
		diff = `${diffInYears} Years `;
	}
	if (diffInMonths > 0) {
		diffInMonths -= 12;
		diff += `${diffInMonths} Months`;
	}
	return diff;
}

export interface Project {
	name: string;
	description: string;
	url: string;
	stars?: {
		author: string;
		repo: string;
	};
	badges?: string[];
}

export const MYPROJECTS: Project[] = [
	{
		name: 'Edra',
		description:
			'A Rich Text Editor made with Tiptap for Svelte Developers with extensibility and proper data output. Focused on ease of use and copied to your project as an component, with beautiful default UI',
		url: 'https://edra.tsuzat.com',
		stars: {
			author: 'Tsuzat',
			repo: 'Edra'
		},
		badges: ['https://waka-api.dev-tsuzat.workers.dev/Edra']
	},
	{
		name: 'NeoSolarzined.nvim',
		description: `A dark and light Neovim theme written in Lua ported from NeoSolarized with better syntax highlighting. 
                Includes extra themes for Kitty, Alacritty, Wezterm, Konsole and Windows Terminal.`,
		url: 'https://github.com/Tsuzat/NeoSolarized.nvim',
		stars: {
			author: 'Tsuzat',
			repo: 'NeoSolarized.nvim'
		}
	},
	{
		name: 'Kanban',
		description: `Streamline your workflow with suckless, minimal, powerful and feature rich kanban board app. 
            Drag-and-drop tasks, write extensive notes on tasks, and stay on top of your projects.`,
		url: 'https://kanban.tsuzat.com',
		stars: {
			author: 'Tsuzat',
			repo: 'kanban'
		}
	}
];

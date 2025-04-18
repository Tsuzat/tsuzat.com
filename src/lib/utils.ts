import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// utils for markdown posts
import type { Component, ComponentType } from 'svelte';
import Git from './components/icons/git.svelte';
import Tailwind from './components/icons/tailwind.svelte';
import Svelte from './components/icons/svelte.svelte';
import Ts from './components/icons/ts.svelte';
import Figma from './components/icons/figma.svelte';
import Vercel from './components/icons/vercel.svelte';
import Supabase from './components/icons/supabase.svelte';
import Tauri from './components/icons/tauri.svelte';
import Flutter from './components/icons/flutter.svelte';
import Go from './components/icons/go.svelte';

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

export interface Skill {
	title: string;
	description: string;
	icon: Component;
	color: string;
}

export const MYSKILLS: Skill[] = [
	{ title: 'Git', description: 'Version control system', icon: Git, color: '#f34f29' },
	{ title: 'Tailwind', description: 'CSS framework', icon: Tailwind, color: '#38bdf8' },
	{ title: 'Svelte', description: 'Frontend framework', icon: Svelte, color: '#ff3e00' },
	{ title: 'TypeScript', description: 'Statically typed JS', icon: Ts, color: '#3178c6' },
	{ title: 'Figma', description: 'UI design tool', icon: Figma, color: '#0acf83' },
	{ title: 'Vercel', description: 'Serverless hosting', icon: Vercel, color: '#808080' },
	{ title: 'Supabase', description: 'Firebase alternative', icon: Supabase, color: '#287050' },
	{ title: 'Tauri', description: 'Rust framework', icon: Tauri, color: '#ffc131' },
	{ title: 'Flutter', description: 'App for any screen', icon: Flutter, color: '#41d0fd' },
	{ title: 'Go', description: 'Modern days C', icon: Go, color: '#6ad7e5' }
];

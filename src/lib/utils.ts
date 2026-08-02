import { type ClassValue, clsx } from 'clsx';
import type { ComponentType } from 'svelte';
import { twMerge } from 'tailwind-merge';

import neosolarized from '$lib/assets/static/neosolazied.png';
import edra from '$lib/assets/static/edra.png';
import bugtriage from '$lib/assets/posts/smart-bug-triage-poc/poster.png';

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

export interface Project {
	href: string;
	img: string;
	title: string;
	description: string;
	github?: {
		username: string;
		repo: string;
	};
}

export const projects: Project[] = [
	{
		href: 'https://edra.tsuzat.com/',
		img: edra,
		title: 'Edra',
		description:
			'An open-source, extensible rich text editor framework for Svelte, built on TipTap with a modern plugin architecture.',
		github: {
			username: 'Tsuzat',
			repo: 'edra'
		}
	},
	{
		href: 'https://www.nota.ink/',
		img: 'https://www.nota.ink/preview/dark.png',
		title: 'Nota',
		description:
			'A local-first, cross-platform note-taking application built with SvelteKit, Go, and Tauri, featuring AI assistance and seamless cloud sync.',
		github: {
			username: 'Tsuzat',
			repo: 'nota'
		}
	},
	{
		href: '/blogs/smart-bug-triage-poc',
		img: bugtriage,
		title: 'Smart Bug Triage (AI PoC)',
		description:
			'An enterprise AI proof of concept using embeddings, vector search, RAG, and LLMs to automate bug analysis and accelerate developer workflows.',
		github: undefined
	},
	{
		href: 'https://github.com/Tsuzat/NeoSolarized.nvim',
		img: neosolarized,
		title: 'NeoSolarized.nvim',
		description:
			'A modern NeoVim colorscheme inspired by Solarized, featuring full transparency and extensive plugin support.',
		github: {
			username: 'Tsuzat',
			repo: 'NeoSolarized.nvim'
		}
	}
];

export interface Skill {
	name: string;
	href: string;
	description: string;
	icon: string;
}

export const skills: Skill[] = [
	{
		name: 'SvelteKit',
		href: 'https://svelte.dev/',
		description: 'Full stack framework',
		icon: 'devicon:svelte'
	},
	{
		name: 'Tailwind CSS',
		href: 'https://tailwindcss.com/',
		description: 'A utility-first CSS framework',
		icon: 'devicon:tailwindcss'
	},
	{
		name: 'TypeScript',
		href: 'https://www.typescriptlang.org/',
		description: 'JS with fake types',
		icon: 'devicon:typescript'
	},
	{
		name: 'Neovim',
		href: 'https://neovim.io/',
		description: 'Hyperextensible Vim-based text editor',
		icon: 'devicon:neovim'
	},
	{
		name: 'Supabase',
		href: 'https://supabase.com/',
		description: 'Build in a weekend Scale to millions',
		icon: 'devicon:supabase'
	},
	{
		name: 'Git',
		href: 'https://git-scm.com/',
		description: 'Best version control system',
		icon: 'devicon:git'
	}
];

export const prerender = true;
export const ssr = true;

import { getGithubStars, type Project } from '$lib/utils';

export const load = async () => {
	const projects: Project[] = [
		{
			name: 'NeoSolarzined.nvim',
			description: `A dark and light Neovim theme written in Lua ported from NeoSolarized with better syntax highlighting. 
                Includes extra themes for Kitty, Alacritty, Wezterm, Konsole and Windows Terminal.`,
			url: 'https://github.com/Tsuzat/NeoSolarized.nvim',
			stars: await getGithubStars('Tsuzat', 'NeoSolarized.nvim')
		},
		{
			name: 'Shad Editor',
			description:
				'An editor with rich text features and a beautiful UI, provides full flexibility and customizable components ready to copy and paste, made for developers.',
			url: 'https://shad-editor.tsuzat.com',
			stars: await getGithubStars('Tsuzat', 'ShadEditor'),
			badges: ['https://waka-api.dev-tsuzat.workers.dev/ShadEditor']
		},
		{
			name: 'Kanban',
			description: `Streamline your workflow with suckless, minimal, powerful and feature rich kanban board app. 
            Drag-and-drop tasks, write extensive notes on tasks, and stay on top of your projects.`,
			url: 'https://kanban.tsuzat.com',
			stars: await getGithubStars('Tsuzat', 'kanban')
		}
	];
	return {
		projects
	};
};

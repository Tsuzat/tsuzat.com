import type { Project } from '$lib/utils';

export const prerender = true;
export const ssr = true;

export const load = async () => {
	const projects: Project[] = [
		{
			name: 'NeoSolarzined.nvim',
			description: `A dark and light Neovim theme written in Lua ported from NeoSolarized with better syntax highlighting. 
                Includes extra themes for Kitty, Alacritty, Wezterm, Konsole and Windows Terminal.`,
			url: 'https://github.com/Tsuzat/NeoSolarized.nvim',
			stars: 171
		},
		{
			name: 'Kanban',
			description: `Streamline your workflow with suckless, minimal, powerful and feature rich kanban board app. 
            Drag-and-drop tasks, write extensive notes on tasks, and stay on top of your projects.`,
			url: 'https://kanban.tsuzat.com'
		}
	];
	return {
		projects
	};
};

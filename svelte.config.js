import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import slug from 'remark-slug';

import { codeToHtml } from 'shiki';

async function codeHighlighter(code, langStr) {
	let lang = undefined;
	const lineOptions = [];

	if (langStr) {
		const langArr = langStr?.split('{');

		lang = langArr[0];

		let lineNumbersStr = langArr[1];

		if (lineNumbersStr) {
			lineNumbersStr = lineNumbersStr.substring(0, lineNumbersStr.length - 1);

			const lineNumberRanges = lineNumbersStr.split(',');

			lineNumberRanges.forEach((lineNumberRange) => {
				const numbers = lineNumberRange.split('-');

				const startNum = parseInt(numbers[0]);

				lineOptions.push(startNum);

				if (numbers.length > 1) {
					const endNum = parseInt(numbers[1]);

					for (let i = startNum + 1; i <= endNum; i++) {
						lineOptions.push(i);
					}
				}
			});
		}
	}

	console.log(lineOptions);

	const shikiHtml = await codeToHtml(code, {
		lang: lang,
		themes: {
			light: 'catppuccin-latte',
			dark: 'catppuccin-mocha'
		},
		transformers: [
			{
				line(node, line) {
					node.properties['data-line'] = line;
					if (lineOptions.includes(line)) {
						this.addClassToHast(node, 'line-highlight');
					}
				}
			}
		]
	});

	const html = escapeSvelte(shikiHtml);
	return `{@html \`${html}\` }`;
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfigs = {
	extensions: ['.md', '.svx', '.svelte'],
	highlight: {
		highlighter: codeHighlighter
	},
	remarkPlugins: [slug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [mdsvex(mdsvexConfigs), vitePreprocess()],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

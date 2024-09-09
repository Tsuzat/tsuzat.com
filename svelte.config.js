import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import slug from 'remark-slug';

import { codeToHtml } from 'shiki';

function returnArrayFromRangeString(rangeString) {
	// The range string will be in the format "1-3,5,7-9"
	const rangeArray = rangeString.split(',');
	const resultArray = [];

	rangeArray.forEach((range) => {
		const rangeParts = range.split('-');
		const start = parseInt(rangeParts[0]);
		const end = parseInt(rangeParts[1]) || start;

		for (let i = start; i <= end; i++) {
			resultArray.push(i);
		}
	});

	return resultArray;
}

async function codeHighlighter(code, langStr) {
	let lang = undefined;
	let lineHighlight = [];
	let diffAdd = [];
	let diffRemove = [];
	let fileName = 'Terminal';

	if (langStr) {
		const langArr = langStr?.split('{');

		lang = langArr[0];

		// args are in the format %h[1,3-4]%ga[5]%gd[6]%f[./hello.html]
		if (langArr[1]) {
			let args = langArr[1].split('}')[0].split('%');
			for (let arg of args) {
				if (arg.startsWith('h')) {
					const lineRange = arg.split('[')[1].split(']')[0];
					lineHighlight = returnArrayFromRangeString(lineRange);
				} else if (arg.startsWith('ga')) {
					const lineRange = arg.split('[')[1].split(']')[0];
					diffAdd = returnArrayFromRangeString(lineRange);
				} else if (arg.startsWith('gd')) {
					const lineRange = arg.split('[')[1].split(']')[0];
					diffRemove = returnArrayFromRangeString(lineRange);
				} else if (arg.startsWith('f')) {
					fileName = arg.split('[')[1].split(']')[0];
				}
			}
		}
	}

	const shikiHtml = await codeToHtml(code, {
		lang: lang,
		themes: {
			light: 'one-light',
			dark: 'one-dark-pro'
		},
		transformers: [
			{
				code(node) {
					// add the file name as a property
					node.properties['data-file-name'] = fileName;
				},
				line(node, line) {
					node.properties['data-line'] = line;
					if (lineHighlight.includes(line)) {
						this.addClassToHast(node, 'line-highlight');
					}
					if (diffAdd.includes(line)) {
						this.addClassToHast(node, 'diff-add');
					}
					if (diffRemove.includes(line)) {
						this.addClassToHast(node, 'diff-remove');
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

import { Editor, type Content, type EditorOptions, type Extensions } from '@tiptap/core';
import Color from '@tiptap/extension-color';
import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Typography from '@tiptap/extension-typography';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import Text from '@tiptap/extension-text';
import { SmilieReplacer } from './extensions/SmilieReplacer.js';
import { ColorHighlighter } from './extensions/ColorHighlighter.js';
import { MathExtension } from '@aarkue/tiptap-math-extension';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import { Markdown } from 'tiptap-markdown';

export const initiateEditor = (
	element?: HTMLElement,
	content?: Content,
	limit?: number,
	extensions?: Extensions,
	options?: Partial<EditorOptions>
): Editor => {
	const editor = new Editor({
		element: element,
		content: content,
		extensions: [
			StarterKit.configure({
				orderedList: {
					HTMLAttributes: {
						class: 'list-decimal'
					}
				},
				bulletList: {
					HTMLAttributes: {
						class: 'list-disc'
					}
				},
				heading: {
					levels: [1, 2, 3, 4],
					HTMLAttributes: {
						class: 'tiptap-heading'
					}
				},
				codeBlock: false,
				text: false
			}),
			SmilieReplacer,
			ColorHighlighter,
			Superscript,
			Subscript,
			Underline,
			Link.configure({
				openOnClick: false,
				autolink: true,
				defaultProtocol: 'https',
				HTMLAttributes: {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
			}),
			TaskList,
			TaskItem.configure({
				nested: true
			}),
			TextStyle,
			Color,
			Highlight.configure({ multicolor: true }),
			Text,
			Typography,
			TextAlign.configure({
				types: ['heading', 'paragraph']
			}),
			MathExtension.configure({ evaluation: true }),

			Markdown.configure({
				html: true,
				tightLists: true,
				tightListClass: 'tight',
				bulletListMarker: '-',
				linkify: true, // Create links from "https://..." text
				breaks: true, // New lines (\n) in markdown input are converted to <br>
				transformPastedText: true, // Allow to paste markdown text in the editor
				transformCopiedText: false // Copied text is transformed to markdown
			}),
			Placeholder.configure({
				emptyEditorClass: 'is-empty',
				// Use a placeholder:
				// Use different placeholders depending on the node type:
				placeholder: () => {
					return 'Write Something...';
				}
			}),
			CharacterCount.configure({
				limit
			}),

			...(extensions ?? [])
		],
		autofocus: false,
		...options
	});
	return editor;
};

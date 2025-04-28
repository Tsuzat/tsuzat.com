import { isMac } from '../utils.js';
import type { EdraCommandGroup } from './types.js';

export const commands: Record<string, EdraCommandGroup> = {
	'undo-redo': {
		name: 'redo undo',
		label: 'Redo/Undo',
		commands: [
			{
				iconName: 'Undo',
				name: 'undo',
				label: 'Undo',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Z`],
				action: (editor) => {
					editor.chain().focus().undo().run();
				}
			},
			{
				iconName: 'Redo',
				name: 'redo',
				label: 'Redo',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Y`, `${isMac ? 'Cmd' : 'Ctrl'}+Shift+Z`],
				action: (editor) => {
					editor.chain().focus().redo().run();
				}
			}
		]
	},
	headings: {
		name: 'Headings',
		label: 'Headings',
		commands: [
			{
				iconName: 'Heading1',
				name: 'heading1',
				label: 'Heading 1',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Alt+1`],
				action: (editor) => {
					editor.chain().focus().toggleHeading({ level: 1 }).run();
				},
				isActive: (editor) => editor.isActive('heading', { level: 1 })
			},
			{
				iconName: 'Heading2',
				name: 'heading2',
				label: 'Heading 2',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Alt+2`],
				action: (editor) => {
					editor.chain().focus().toggleHeading({ level: 2 }).run();
				},
				isActive: (editor) => editor.isActive('heading', { level: 2 })
			},
			{
				iconName: 'Heading3',
				name: 'heading3',
				label: 'Heading 3',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Alt+3`],
				action: (editor) => {
					editor.chain().focus().toggleHeading({ level: 3 }).run();
				},
				isActive: (editor) => editor.isActive('heading', { level: 3 })
			}
		]
	},
	'text-formatting': {
		name: 'Text Formatting',
		label: 'Text Formatting',
		commands: [
			{
				iconName: 'Link',
				name: 'link',
				label: 'Link',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+K`],
				action: (editor) => {
					const href = prompt('Enter the URL of the link:');
					if (href !== null) editor.chain().focus().setLink({ href, target: '_blank' }).run();
				}
			},
			{
				iconName: 'Bold',
				name: 'bold',
				label: 'Bold',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+B`],
				action: (editor) => {
					editor.chain().focus().toggleBold().run();
				}
			},
			{
				iconName: 'Italic',
				name: 'italic',
				label: 'Italic',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+I`],
				action: (editor) => {
					editor.chain().focus().toggleItalic().run();
				}
			},
			{
				iconName: 'Underline',
				name: 'underline',
				label: 'Underline',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+U`],
				action: (editor) => {
					editor.chain().focus().toggleUnderline().run();
				}
			},
			{
				iconName: 'Strikethrough',
				name: 'strike',
				label: 'Strikethrough',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Shift+S`],
				action: (editor) => {
					editor.chain().focus().toggleStrike().run();
				}
			},
			{
				iconName: 'Quote',
				name: 'blockquote',
				label: 'Blockquote',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Shift+B`],
				action: (editor) => {
					editor.chain().focus().toggleBlockquote().run();
				}
			},
			{
				iconName: 'Superscript',
				name: 'superscript',
				label: 'Superscript',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Period`],
				action: (editor) => {
					editor.chain().focus().toggleSuperscript().run();
				}
			},
			{
				iconName: 'Subscript',
				name: 'subscript',
				label: 'Subscript',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Comma`],
				action: (editor) => {
					editor.chain().focus().toggleSubscript().run();
				}
			},
			{
				iconName: 'Code',
				name: 'code',
				label: 'Code',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+E`],
				action: (editor) => {
					editor.chain().focus().toggleCode().run();
				}
			},
			{
				iconName: 'Braces',
				name: 'codeBlock',
				label: 'Code Block',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Alt+C`],
				action: (editor) => {
					editor.chain().focus().toggleCodeBlock().run();
				}
			}
		]
	},
	alignment: {
		name: 'Alignment',
		label: 'Alignment',
		commands: [
			{
				iconName: 'AlignLeft',
				name: 'alignLeft',
				label: 'Align Left',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Shift+L`],
				action: (editor) => {
					editor.chain().focus().setTextAlign('left').run();
				},
				isActive: (editor) => editor.isActive({ textAlign: 'left' })
			},
			{
				iconName: 'AlignCenter',
				name: 'alignCenter',
				label: 'Align Center',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Shift+E`],
				action: (editor) => {
					editor.chain().focus().setTextAlign('center').run();
				},
				isActive: (editor) => editor.isActive({ textAlign: 'center' })
			},
			{
				iconName: 'AlignRight',
				name: 'alignRight',
				label: 'Align Right',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Shift+R`],
				action: (editor) => {
					editor.chain().focus().setTextAlign('right').run();
				},
				isActive: (editor) => editor.isActive({ textAlign: 'right' })
			},
			{
				iconName: 'AlignJustify',
				name: 'alignJustify',
				label: 'Align Justify',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Shift+J`],
				action: (editor) => {
					editor.chain().focus().setTextAlign('justify').run();
				},
				isActive: (editor) => editor.isActive({ textAlign: 'justify' })
			}
		]
	},
	lists: {
		name: 'Lists',
		label: 'Lists',
		commands: [
			{
				iconName: 'List',
				name: 'bulletList',
				label: 'Bullet List',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Shift+8`],
				action: (editor) => {
					editor.chain().focus().toggleBulletList().run();
				}
			},
			{
				iconName: 'ListOrdered',
				name: 'orderedList',
				label: 'Ordered List',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Shift+7`],
				action: (editor) => {
					editor.chain().focus().toggleOrderedList().run();
				}
			},
			{
				iconName: 'ListChecks',
				name: 'taskList',
				label: 'Task List',
				shortCuts: [`${isMac ? 'Cmd' : 'Ctrl'}+Shift+9`],
				action: (editor) => {
					editor.chain().focus().toggleTaskList().run();
				}
			}
		]
	}
};

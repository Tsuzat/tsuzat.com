<script lang="ts">
	import type { Editor } from '@tiptap/core';
	import { onMount } from 'svelte';
	import { initiateEditor } from '../editor.js';

	import '../editor.css';
	import './style.css';
	import '../onedark.css';

	import 'katex/dist/katex.min.css';
	import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
	import CodeExtended from './components/CodeExtended.svelte';
	import { all, createLowlight } from 'lowlight';
	import { SvelteNodeViewRenderer } from 'svelte-tiptap';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import { focusEditor, type EdraProps } from '../utils.js';
	import { cn } from '$lib/utils.js';

	const lowlight = createLowlight(all);

	let {
		class: className = '',
		content = undefined,
		limit = undefined,
		editable = true,
		editor = $bindable<Editor | undefined>(),
		onUpdate
	}: EdraProps = $props();

	let element = $state<HTMLElement>();

	onMount(() => {
		editor = initiateEditor(
			element,
			content,
			limit,
			[
				CodeBlockLowlight.configure({
					lowlight
				}).extend({
					addNodeView() {
						return SvelteNodeViewRenderer(CodeExtended);
					}
				})
			],
			{
				editable,
				onUpdate,
				onTransaction(props) {
					editor = undefined;
					editor = props.editor;
				}
			}
		);
		return () => editor?.destroy();
	});
</script>

<div class={cn('edra', className)}>
	{#if !editor}
		<div class="flex size-full items-center justify-center gap-4 text-xl">
			<LoaderCircle class="animate-spin" /> Loading...
		</div>
	{/if}
	<div
		bind:this={element}
		role="button"
		tabindex="0"
		onclick={(event) => focusEditor(editor, event)}
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				focusEditor(editor, event);
			}
		}}
		class="edra-editor prose dark:prose-invert h-full min-w-full cursor-auto p-2 *:outline-none"
	></div>
</div>

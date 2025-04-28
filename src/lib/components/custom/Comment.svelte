<script lang="ts">
	import { Edra } from '../edra/shadcn';
	import { Transaction } from '@tiptap/pm/state';
	import { Button } from '../ui/button';
	import Icons from '../icons';
	import type { Editor } from '@tiptap/core';

	interface Props {
		onSubmit(content: string): void;
	}
	const { onSubmit }: Props = $props();

	let content = $state<string>('');
	let editor = $state<Editor>();
	const MAX_LIMIT = 256;

	function onUpdate(props: { editor: Editor; transaction: Transaction }) {
		content = props.editor.getHTML();
	}
</script>

<div class="flex max-h-40 w-full items-end gap-1 overflow-hidden rounded-lg border p-2">
	<Edra bind:editor {content} limit={MAX_LIMIT} class="max-h-40 w-full overflow-auto" {onUpdate} />
	<Button
		variant="outline"
		size="icon"
		disabled={!content || content.trim() === ''}
		onclick={() => onSubmit(content)}
	>
		<Icons.send />
	</Button>
</div>
{#if editor}
	<p class="text-muted-foreground text-end text-sm">
		{editor.storage.characterCount.characters()} / {MAX_LIMIT}
	</p>
{/if}

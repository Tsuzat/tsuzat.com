<script lang="ts">
	import { Edra } from '../edra/shadcn';
	import { Transaction } from '@tiptap/pm/state';
	import { Button } from '../ui/button';
	import Icons from '../icons';
	import type { Editor } from '@tiptap/core';
	import * as Avatar from '../ui/avatar';
	import type { User } from '$lib/server/db/schema';
	import { PUBLIC_MAX_LIMIT } from '$env/static/public';

	interface Props {
		user: User;
		onSubmit(content: string): void;
	}
	const { user, onSubmit }: Props = $props();

	let content = $state<string>('');
	let editor = $state<Editor>();
	const max_limit = parseInt(PUBLIC_MAX_LIMIT);
	const characters = $derived.by(
		() => (editor ? editor.storage.characterCount.characters() : 0) as number
	);

	function onUpdate(props: { editor: Editor; transaction: Transaction }) {
		content = props.editor.getHTML();
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
			event.preventDefault();
			if (!content || content.trim() === '') return;
			onSubmit(content.trim());
			editor?.commands.setContent('');
		}
	}
</script>

<svelte:document onkeydown={handleKeyDown} />

<div class="my-4 flex items-center justify-between">
	<div class="inline-flex items-center gap-2">
		<Avatar.Root class="size-8">
			<Avatar.Image src={user.avatarUrl} alt={user.username} />
			<Avatar.Fallback>{user.username.charAt(0)}</Avatar.Fallback>
		</Avatar.Root>
		<span>{user.username}</span>
	</div>
	<form method="POST" action="/">
		<Button type="submit" variant="secondary" size="icon" title="Sign out">
			<Icons.logOut />
		</Button>
	</form>
</div>
<div class="flex max-h-40 w-full items-end gap-1 overflow-hidden rounded-lg border p-2">
	<Edra {content} bind:editor limit={max_limit} class="max-h-40 w-full overflow-auto" {onUpdate} />
	<Button
		size="icon"
		disabled={!content ||
			content.trim() === '' ||
			characters > max_limit ||
			characters < 1 ||
			editor?.storage.characterCount.words() < 1}
		onclick={() => {
			onSubmit(content.trim());
			editor?.commands.setContent('');
		}}
	>
		<Icons.send />
	</Button>
</div>
{#if editor}
	<p class="text-muted-foreground text-end text-sm">
		{editor.storage.characterCount.characters()} / {max_limit}
	</p>
{/if}

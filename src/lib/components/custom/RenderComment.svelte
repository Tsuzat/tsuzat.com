<script lang="ts">
	import '../edra/shadcn/style.css';
	import '../edra/editor.css';
	import '../edra/onedark.css';
	import type { User, Comment } from '$lib/server/db/schema';
	import * as Avatar from '$lib/components/ui/avatar';
	import { onMount } from 'svelte';
	import Icons from '../icons';
	import { Edra } from '../edra/shadcn';
	import type { Editor } from '@tiptap/core';
	import { Transaction } from '@tiptap/pm/state';
	import { Button } from '../ui/button';
	import { timeAgo } from '$lib/utils';

	interface Props {
		comment: Comment;
		onEdit: (comment: Comment) => void;
	}

	const { comment, onEdit }: Props = $props();

	let user = $state<User>();
	let isEditing = $state<boolean>(false);
	let editor = $state<Editor>();

	$effect(() => {
		editor?.setEditable(isEditing);
	});

	onMount(async () => {
		try {
			const res = await fetch(`/api/user/${comment.userId}`);
			if (res.ok) {
				user = await res.json();
			} else {
				console.log(res.status);
			}
		} catch (error) {
			console.error(error);
		}
	});

	function onUpdate(props: { editor: Editor; transaction: Transaction }) {
		comment.content = props.editor.getHTML();
	}
</script>

<div class="flex w-full gap-2">
	{#if user}
		<Avatar.Root class="size-8">
			<Avatar.Image src={user.avatarUrl}></Avatar.Image>
			<Avatar.Fallback>{user.username.charAt(0)}</Avatar.Fallback>
		</Avatar.Root>
		<div class="w-full rounded-lg border">
			<div class="bg-muted dark:bg-muted/25 flex w-full items-center gap-2 border-b pl-2">
				<a class="font-bold underline" target="_blank" href="https://github.com/{user.username}"
					>{user.username}</a
				>
				·
				<span class="text-muted-foreground text-sm">{timeAgo(new Date(comment.updatedAt))}</span>
				{#if comment.updatedAt !== comment.createdAt}
					· <span class="text-muted-foreground text-sm">Edited</span>
				{/if}
				{#if !isEditing}
					<Button
						variant="ghost"
						size="icon"
						class="ml-auto"
						title="Edit"
						onclick={() => {
							isEditing = true;
						}}
					>
						<Icons.edit class="text-muted-foreground" />
						<span class="sr-only">Edit</span>
					</Button>
				{:else}
					<Button
						variant="ghost"
						size="icon"
						class="ml-auto"
						title="Save"
						disabled={comment.content.trim() === '' ||
							editor?.storage.characterCount.characters() < 1 ||
							editor?.storage.characterCount.words() < 1}
						onclick={() => {
							onEdit(comment);
							isEditing = false;
						}}
					>
						<Icons.send />
						<span class="sr-only">Edit</span>
					</Button>
				{/if}
			</div>
			<Edra
				content={comment.content}
				editable={false}
				bind:editor
				{onUpdate}
				class="max-h-60 w-full overflow-auto"
			/>
		</div>
	{:else}
		<span>Loading...</span>
	{/if}
</div>
{#if isEditing && editor}
	<span class="text-muted-foreground text-end text-sm">
		{editor.storage.characterCount.characters()} / 256
	</span>
{/if}

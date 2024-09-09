<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';

	let isClicked = false;

	function copyCode() {
		isClicked = true;
		const copyButton = document.getElementById('copy-code');
		if (copyButton) {
			// Next child element is code so copy that to clipboard
			const code = copyButton.nextElementSibling;
			if (code && code.textContent) navigator.clipboard.writeText(code.textContent);

			toast.success('Copied Code to clipboard');
		}
		setTimeout(() => {
			isClicked = false;
		}, 2000);
	}
</script>

<Button class="p-0 h-fit hover:bg-transparent" variant="ghost" id="copy-code" on:click={copyCode}>
	{#if isClicked}
		<!-- <Icons.copyCheck class="size-4 text-green-600" /> -->
		<span class="text-green-500 text-xs">Copied</span>
	{:else}
		<!-- <Icons.copy class="size-4" /> -->
		<span class="text-xs">Copy</span>
	{/if}
</Button>

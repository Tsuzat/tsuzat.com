<script lang="ts">
	import { toast } from 'svelte-sonner';

	let isClicked = $state(false);
	let CopyCodeElement: HTMLButtonElement;

	function copyCode() {
		isClicked = true;
		// Next child element is code so copy that to clipboard
		const code = CopyCodeElement.parentNode?.nextSibling;
		console.log(code);
		if (code && code.textContent) navigator.clipboard.writeText(code.textContent);

		toast.success('Copied Code to clipboard');
		setTimeout(() => {
			isClicked = false;
		}, 2000);
	}
</script>

<button class="h-fit p-0 hover:bg-transparent" onclick={copyCode} bind:this={CopyCodeElement}>
	{#if isClicked}
		<span class="text-xs text-green-500">Copied</span>
	{:else}
		<span class="text-xs">Copy</span>
	{/if}
</button>

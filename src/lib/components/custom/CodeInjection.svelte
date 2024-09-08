<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const preTags = document.querySelectorAll('pre.shiki');
		preTags.forEach((tag) => {
			// Get all code tags inside "tag"
			const codeTags = tag.querySelectorAll('code');
			codeTags.forEach((codeTag) => {
				// A code tag has a lot span tags inside it
				const lines = codeTag.getElementsByClassName('line');
				let count = 1;
				// for each span tag, we need to add
				// line count in "before" pseudo element
				for (let i = 0; i < lines.length; i++) {
					const line = lines[i];
					line.classList.add('before:content-[' + count + ']', 'block');
					count++;
				}
			});
		});
	});
</script>

<slot />

<script lang="ts">
	import { mount, onMount } from 'svelte';
	import CopyCode from './copy-code.svelte';

	onMount(() => {
		const preTags = document.querySelectorAll('pre.shiki');
		preTags.forEach((tag) => {
			// Tag has code inside
			let fileName = '';
			let codeTag = tag.querySelector('code');
			if (codeTag) {
				// Code tag has a property "data-file-name" we need to get it
				fileName = codeTag.dataset.fileName || 'Terminal';
			}

			// Generate a new div
			let preTagParent = tag.parentNode;
			const div = document.createElement('div');
			div.className = 'valkyrie rounded overflow-hidden';

			const divTopBar = document.createElement('div');
			divTopBar.className =
				'flex items-center justify-between px-4 rounded-t-md border-b border-muted-foreground/[10%] bg-muted/[25%] px-2.5 py-1 font-mono text-xs text-muted-foreground/75';

			// Add one div with class "file name" and content as "filename.ext"
			const fileNameDiv = document.createElement('div');
			fileNameDiv.textContent = fileName;

			mount(CopyCode, { target: divTopBar });

			divTopBar.prepend(fileNameDiv);

			if (preTagParent) {
				preTagParent.replaceChild(div, tag);
				div.prepend(divTopBar);
				div.appendChild(tag);
			}
		});
	});
</script>

<slot />

<script lang="ts">
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon-star';
	import { Button } from '$lib/components/ui/button';
	import { toggleMode } from 'mode-watcher';
</script>

<Button onclick={toggleMode} variant="ghost" size="icon">
	<Sun class="scale-100 rotate-0 transition-all! duration-300 dark:scale-0 dark:-rotate-360" />
	<Moon
		class="absolute scale-0 rotate-360 transition-all! duration-300 dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>

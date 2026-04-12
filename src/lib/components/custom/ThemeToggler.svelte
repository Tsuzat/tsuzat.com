<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { toggleMode } from 'mode-watcher';
	import Icons from '../icons';
</script>

<Button onclick={toggleMode} variant="ghost" size="icom-md">
	<Icons.sun
		class="scale-100 rotate-0 transition-all! duration-300 dark:scale-0 dark:-rotate-360"
	/>
	<Icons.moon
		class="absolute scale-0 rotate-360 transition-all! duration-300 dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>

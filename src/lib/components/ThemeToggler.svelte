<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { toggleMode } from 'mode-watcher';
	import Icons from './icons';
</script>

<Button
	variant="ghost"
	class="relative size-6 cursor-pointer hover:bg-transparent"
	onclick={toggleMode}
>
	<Icons.sun class="absolute scale-100 transition-all duration-500 dark:scale-0" />
	<Icons.moon class="absolute scale-0 transition-all duration-500 dark:scale-100" />
</Button>

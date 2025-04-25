<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '@fontsource-variable/open-sans';
	import '../app.css';

	let { children } = $props();
</script>

<ModeWatcher />

{@render children()}

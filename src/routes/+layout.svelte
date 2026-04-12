<script lang="ts">
	import ToggleMode from '$lib/components/custom/ToggleMode.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import './layout.css';
	let { children } = $props();
</script>

<ModeWatcher />

<header>
	<ToggleMode />
</header>
{@render children()}

<script lang="ts">
	interface Props {
		[key: string]: object;
	}

	let { ...rest }: Props = $props();
</script>

<svg role="img" viewBox="0 0 24 24" {...rest}>
	<path fill="currentColor" d="m.66 16.95 13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z" />
</svg>

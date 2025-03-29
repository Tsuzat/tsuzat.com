<script lang="ts">
	interface Props {
		[key: string]: unknown;
	}

	let { ...restProps }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="128"
	height="128"
	viewBox="0 0 128 128"
	{...restProps}
>
	<path d="M64.002 8.576L128 119.424H0Zm0 0" />
</svg>

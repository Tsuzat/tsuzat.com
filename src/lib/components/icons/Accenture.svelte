<script lang="ts">
	interface Props {
		[key: string]: any;
	}

	const { ...rest } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest}
	><path fill="#a600ff" d="m.66 16.95l13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z" /></svg
>

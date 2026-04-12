<script lang="ts">
	const { children } = $props();
</script>

<main class="bg-line mx-auto max-w-3xl px-4 py-12">
	{@render children()}
</main>

<script lang="ts">
	import { Icons } from '$lib/components/custom/icons';
</script>

<footer class="footer flex items-center justify-between my-4 py-4 text-muted-foreground">
	<div>© Alok "Tsuzat" Singh {new Date().getFullYear()}</div>
	<div class="flex items-center gap-4">
		<a href="https://github.com/Tsuzat" target="_blank" class="">
			<Icons.github class="size-4" />
		</a>
		<a href="https://www.linkedin.com/in/alok-singh-tsuzat" target="_blank">
			<Icons.linkedin class="size-4" />
		</a>
		<a href="mailto:contact@tsuzat.com " target="_blank">
			<Icons.email class="size-4" />
		</a>
		<a href="https://x.com/TheTsuzat" target="_blank">
			<Icons.x class="size-4" />
		</a>
	</div>
</footer>

<script lang="ts">
	import Email from '../icons/email.svelte';
	import Github from '../icons/github.svelte';
	import Linkedin from '../icons/linkedin.svelte';
	import Twitter from '../icons/twitter.svelte';
</script>

<footer class="footer my-4 flex items-center justify-between py-4 text-muted-foreground">
	<div>© Alok "Tsuzat" Singh {new Date().getFullYear() + 1}</div>
	<div class="flex items-center gap-4">
		<a href="https://github.com/Tsuzat" target="_blank" class="">
			<Github class="size-4" />
		</a>
		<a href="https://www.linkedin.com/in/alok-singh-tsuzat" target="_blank">
			<Linkedin class="size-4" />
		</a>
		<a href="mailto:contact@tsuzat.com " target="_blank">
			<Email class="size-4" />
		</a>
		<a href="https://x.com/TheTsuzat" target="_blank">
			<Twitter class="size-4" />
		</a>
	</div>
</footer>

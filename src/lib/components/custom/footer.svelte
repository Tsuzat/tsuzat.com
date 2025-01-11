<script lang="ts">
	import Email from '../icons/email.svelte';
	import Github from '../icons/github.svelte';
	import Linkedin from '../icons/linkedin.svelte';
	import Twitter from '../icons/twitter.svelte';
</script>

<footer class="footer my-4 flex items-center justify-between py-4 text-muted-foreground">
	<div>© {new Date().getFullYear()} Alok "Tsuzat" Singh</div>
	<div class="flex items-center gap-4">
		<a href="https://github.com/Tsuzat" target="_blank" title="Github Link">
			<Github class="size-4" />
		</a>
		<a href="https://www.linkedin.com/in/alok-singh-tsuzat" target="_blank" title="Linkedin Link">
			<Linkedin class="size-4" />
		</a>
		<a href="mailto:contact@tsuzat.com " target="_blank" title="Email">
			<Email class="size-4" />
		</a>
		<a href="https://x.com/TheTsuzat" target="_blank" title="Twitter/X">
			<Twitter class="size-4" />
		</a>
	</div>
</footer>

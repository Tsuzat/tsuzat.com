<script lang="ts">
	import LottieIcon from './LottieIcon.svelte';
	import animatedData from '$lib/assets/lottie/logo.json';
</script>

<nav>
	<div class="flex justify-between items-center">
		<div class="flex items-center">
			<a href="/" class="text-2xl font-bold text-white">
				<LottieIcon animationData={animatedData} class="size-12" />
			</a>
		</div>
		<div class="flex items-center gap-4">
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
			<a href="/blog">Blog</a>
		</div>
	</div>
</nav>

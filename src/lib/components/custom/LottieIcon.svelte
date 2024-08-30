<script lang="ts">
	import { onMount } from 'svelte';

	export let animationData: {};
	export let loop: Boolean = false;
	export let autoplay: Boolean = true;
	export let hover: Boolean = true;
	let className: string = '';
	export { className as class };

	let lottieContainer: HTMLElement;

	onMount(async () => {
		const lottie = await import('lottie-web');
		//@ts-ignore
		const animation = lottie.loadAnimation({
			container: lottieContainer,
			animationData,
			render: 'svg',
			loop,
			autoplay
		});

		animation.setDirection(1);
		animation.play();

		if (hover) {
			lottieContainer.addEventListener('mouseenter', (_) => {
				// if it is already playing then stopanimation.setDirection(1);
				animation.stop();
				animation.setDirection();
				animation.play();
			});
		}
	});
</script>

<div bind:this={lottieContainer} class={className} />

<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		animationData: object;
		loop?: boolean;
		autoplay?: boolean;
		hover?: boolean;
		class?: string;
	}
	let {
		animationData,
		loop = false,
		autoplay = true,
		hover = true,
		class: className = 'size-14'
	}: Props = $props();

	let lottieContainer: HTMLElement;

	onMount(async () => {
		const lottie = await import('lottie-web');
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
			lottieContainer.addEventListener('mouseenter', () => {
				// if it is already playing then stopanimation.setDirection(1);
				animation.stop();
				animation.setDirection();
				animation.play();
			});
		}
	});
</script>

<div bind:this={lottieContainer} class={className}></div>

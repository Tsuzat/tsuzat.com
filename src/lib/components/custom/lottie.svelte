<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		animationData: {};
		loop?: Boolean;
		autoplay?: Boolean;
		hover?: Boolean;
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

<div bind:this={lottieContainer} class={className}></div>

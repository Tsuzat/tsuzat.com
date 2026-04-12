<script lang="ts">
	import { onMount } from 'svelte';
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon-star';
	import { Button } from '$lib/components/ui/button';

	const duration = 400;

	let isDark = $state(false);
	let buttonRef: HTMLButtonElement | null = $state(null);

	onMount(() => {
		const updateTheme = () => {
			isDark = document.documentElement.classList.contains('dark');
		};

		updateTheme();

		const observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => observer.disconnect();
	});

	const toggleTheme = async () => {
		if (!buttonRef) return;

		// Check if View Transition API is supported
		if (!document.startViewTransition) {
			// Fallback for browsers that don't support View Transition API
			const newTheme = !isDark;
			isDark = newTheme;
			document.documentElement.classList.toggle('dark');
			localStorage.setItem('theme', newTheme ? 'dark' : 'light');
			return;
		}

		await document.startViewTransition(() => {
			const newTheme = !isDark;
			isDark = newTheme;
			document.documentElement.classList.toggle('dark');
			localStorage.setItem('theme', newTheme ? 'dark' : 'light');
		}).ready;

		const { top, left, width, height } = buttonRef.getBoundingClientRect();
		const x = left + width / 2;
		const y = top + height / 2;
		const maxRadius = Math.hypot(
			Math.max(left, window.innerWidth - left),
			Math.max(top, window.innerHeight - top)
		);

		document.documentElement.animate(
			{
				clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]
			},
			{
				duration,
				easing: 'ease-in-out',
				pseudoElement: '::view-transition-new(root)'
			}
		);
	};
</script>

<Button bind:ref={buttonRef} onclick={toggleTheme} variant="ghost" size="icon-lg">
	<Sun class="scale-100 rotate-0 transition-all! duration-300 dark:scale-0 dark:-rotate-360" />
	<Moon
		class="absolute scale-0 rotate-360 transition-all! duration-300 dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>

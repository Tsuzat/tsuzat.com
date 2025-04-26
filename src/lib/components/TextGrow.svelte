<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'svelte-motion';

	interface Props {
		text: string;
		duration?: number;
		class?: string;
	}

	const { text, duration = 0.5, class: className = '' }: Props = $props();
</script>

<div class="inline-block tracking-[-3.8px] whitespace-pre">
	{#each text.split('') as item, index}
		<Motion
			initial={{ opacity: 0, filter: 'blur(4px)', rotateX: 90, y: 5 }}
			transition={{
				ease: 'easeOut',
				duration: duration,
				delay: index * 0.015
			}}
			animate={{
				opacity: 1,
				filter: 'blur(0px)',
				rotateX: 0,
				y: 0
			}}
			let:motion
		>
			<span use:motion class={cn('inline-block tracking-tighter text-current', className)}>
				{item}
			</span>
		</Motion>
	{/each}
</div>

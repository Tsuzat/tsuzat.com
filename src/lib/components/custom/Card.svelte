<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Project } from '$lib/utils';
	import { onMount } from 'svelte';
	import Icons from '../icons';

	interface Props {
		project: Project;
	}

	const { project }: Props = $props();

	let stars = $state<string>();

	onMount(async () => {
		const res = await fetch('/api/github', {
			method: 'POST',
			body: JSON.stringify(project.github)
		});
		if (!res.ok) throw new Error('Something went wrong');
		const data = await res.json();
		stars = data.stars;
	});
</script>

<Card.Root
	class="hover:bg-muted dark:hover:bg-muted/20 bg-background w-full scale-100 cursor-pointer border-0 p-0 shadow-none transition-all duration-500 hover:z-50 hover:scale-[102%] sm:w-1/2"
	onclick={() => window.open(project.href, '_blank')}
	title={project.href}
>
	<Card.Content class="flex flex-col gap-2 p-4">
		<img src={project.img} alt={project.title} class="h-56 w-full rounded-lg object-cover" />
		<div class="text-foreground text-center text-lg font-bold">{project.title}</div>
		<div class="text-muted-foreground text-center text-sm">{project.description}</div>
		<!-- {#if stars}
			<div class="text-muted-foreground flex items-center justify-center gap-2 text-sm">
				<Icons.star class="size-4 fill-amber-500 text-amber-500" />
				<span>{stars}</span>
			</div>
		{/if} -->
	</Card.Content>
</Card.Root>

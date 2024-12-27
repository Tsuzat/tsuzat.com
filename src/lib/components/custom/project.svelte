<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { type Project } from '$lib/utils';
	import { Star } from 'lucide-svelte';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<a href={project.url} target="_blank" title={project.name}>
	<Card.Root
		class="my-4 py-2 transition-all duration-500 hover:scale-105 hover:cursor-pointer sm:flex"
	>
		<Card.Content>
			<div id="content" class="*:py-1">
				<div class="flex items-center justify-between">
					<div class="inline-flex flex-col items-center gap-2 text-2xl font-bold sm:flex-row">
						{project.name}
						<span>
							{#each project.badges || [] as src}
								<img {src} alt={project.name} />
							{/each}
						</span>
					</div>
					{#if project.stars != null}
						<div class="flex items-center text-sm text-muted-foreground">
							<Star class="mr-2 size-4" />
							{project.stars}
						</div>
					{/if}
				</div>

				<p class="text-sm text-muted-foreground">{project.description}</p>
			</div>
		</Card.Content>
	</Card.Root>
</a>

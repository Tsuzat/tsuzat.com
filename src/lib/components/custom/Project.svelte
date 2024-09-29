<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { type Project } from '$lib/utils';
	import { Icons } from '$lib/components/custom/icons';

	export let project: Project;
</script>

<a href={project.url} target="_blank">
	<Card.Root
		class="hover:scale-105 transition-all duration-500 hover:cursor-pointer py-2 sm:flex my-4"
	>
		<Card.Content>
			<div id="content" class="*:py-1">
				<div class="flex items-center justify-between">
					<div class="text-2xl font-bold">
						{project.name}
					</div>
					{#if project.stars != null}
						<div class="flex items-center text-sm text-muted-foreground">
							<Icons.star class="size-4 mr-2" />
							{project.stars}
						</div>
					{/if}
				</div>

				<p class="text-sm text-muted-foreground">{project.description}</p>
			</div>
		</Card.Content>
	</Card.Root>
</a>

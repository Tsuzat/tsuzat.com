<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { type Project } from '$lib/utils';

	export let project: Project;
</script>

<a href={project.url} target="_blank">
	<Card.Root
		class="hover:scale-105 transition-all duration-500 hover:cursor-pointer py-2 sm:flex my-4"
	>
		<Card.Content class="flex">
			<div id="content" class="*:py-1">
				<div class="text-2xl font-bold">{project.name}</div>
				<!-- <p class="text-muted-foreground text-sm flex items-center">
				<Icons.calendar class="size-4 mr-2" />
				<span>
					Published: {formatDate(post.metadata.publishedAt)}
				</span>
			</p> -->
				<p class="text-sm text-muted-foreground">{project.description}</p>
			</div>
		</Card.Content>
	</Card.Root>
</a>

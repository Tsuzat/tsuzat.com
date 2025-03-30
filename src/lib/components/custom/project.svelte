<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import type { Project } from '$lib/utils';
	import { LoaderIcon, Star } from 'lucide-svelte';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

	async function getGithubStars(username: string, repo: string) {
		let stars = 0;
		try {
			const response = await fetch(`/api/github`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, repo })
			});
			const data = await response.json();
			stars = data.stars;
		} catch (error) {}
		return stars;
	}
</script>

<a href={project.url} target="_blank" title={project.name}>
	<Card.Root
		class="my-4 bg-muted/25 py-2 transition-all duration-500 hover:scale-[101%] hover:cursor-pointer hover:bg-muted/50 sm:flex"
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
						{#await getGithubStars(project.stars.author, project.stars.repo)}
							<LoaderIcon class="size-4 animate-spin" />
						{:then stars}
							{console.log(stars)}
							<div class="flex items-center text-sm text-muted-foreground">
								<Star class="mr-2 size-4" />
								{stars}
							</div>
						{/await}
					{/if}
				</div>

				<p class="text-sm text-muted-foreground">{project.description}</p>
			</div>
		</Card.Content>
	</Card.Root>
</a>

<script lang="ts">
	import ProjectView from '$lib/components/custom/Project.svelte';
	import type { Project } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;

	const projects: Project[] = data.projects;
</script>

<div>
	<h1 class="text-2xl font-bold">Projects</h1>
	<div>
		{#each projects as project}
			<ProjectView {project} />
		{/each}
	</div>
	<p>
		Check More Projects on <a href="https://github.com/Tsuzat" target="_blank" class="text-blue-500"
			>GitHub</a
		>
	</p>
</div>

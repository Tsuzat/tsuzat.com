<script lang="ts">
	import { MYPROJECTS, type Project } from '$lib/utils';
	import type { PageData } from './$types';
	import ProjectView from '$lib/components/custom/project.svelte';

	const projects: Project[] = MYPROJECTS;
</script>

<svelte:head>
	<title>Projects | Tsuzat</title>
</svelte:head>

<div>
	<h1 class="text-2xl font-bold">Projects</h1>
	<div>
		{#each projects as project}
			<ProjectView {project} />
		{/each}
	</div>
	<p>
		Check More Projects on <a
			href="https://github.com/Tsuzat"
			target="_blank"
			class="text-blue-500"
			title="Github Link">GitHub</a
		>
	</p>
</div>

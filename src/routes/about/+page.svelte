<script lang="ts">
	import { Icons } from '$lib/components/custom/icons';
	import Avatar from '$lib/components/ui/avatar/avatar.svelte';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	const experiences = data.expirences;
</script>

<svelte:head>
	<title>About | Tsuzat</title>
</svelte:head>

<div class="about my-4">
	<div class="text-3xl font-bold my-4">Hey, I'm Alok "Tsuzat" Singh 👋</div>
	<div class="text-muted-foreground tracking-wide">
		A Software Engineer from India . I'm currently working at
		<a href="https://www.accenture.com/" target="_blank" class="text-[#a100ff] underline"
			>Accenture</a
		>
		as a Software Engineer. I'm passionate about building user-friendly and efficient software. I'm always
		looking for new challenges and opportunities to grow my skills and knowledge.
	</div>
	<div class="experience py-4">
		<div class="text-2xl font-bold my-4">Work</div>
		<div class="text-muted-foreground tracking-wide">
			I specialize in building user-friendly and efficient software. I'm always looking for new
			challenges and opportunities to grow my skills and knowledge. My skills include <strong>
				Java, JavaScript, TypeScript, Python, SvelteKit, Flutter, Spring, Tailwind, Git
			</strong>
			etc. See my
			<a
				href="https://drive.google.com/file/d/1nMhHemWf2Ii9tPtTYj5czV4UmBMH5cjd/view"
				target="_blank"
				class="text-blue-500 underline">resume</a
			> for more details.
		</div>
	</div>
</div>

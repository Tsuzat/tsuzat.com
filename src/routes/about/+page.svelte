<script lang="ts">
	import tata from '$lib/assets/Tata_Group.png';
	import Accenture from '$lib/components/icons/accenture.svelte';
	import { formatDate, getTimeGap } from '$lib/utils';
</script>

<svelte:head>
	<title>About | Tsuzat</title>
</svelte:head>

<div class="about my-4">
	<div class="my-4 text-3xl font-bold">Hey, I'm Alok "Tsuzat" Singh 👋</div>
	<div class="tracking-wide text-muted-foreground">
		A Software Engineer from India . I'm currently working at
		<a href="https://www.accenture.com/" target="_blank" class="text-[#a100ff] underline"
			>Accenture</a
		>
		as a Software Engineer. I'm passionate about building user-friendly and efficient software. I'm always
		looking for new challenges and opportunities to grow my skills and knowledge.
	</div>
	<div class="experience py-4">
		<div class="my-4 text-2xl font-bold">Work</div>
		<div class="tracking-wide text-muted-foreground">
			I specialize in building user-friendly and efficient software. I'm always looking for new
			challenges and opportunities to grow my skills and knowledge. My skills include <strong>
				Java, JavaScript, TypeScript, Python, GenAI, SvelteKit, Flutter, Spring, Tailwind, Git
			</strong>
			etc. See my
			<a
				href="https://drive.google.com/file/d/1nMhHemWf2Ii9tPtTYj5czV4UmBMH5cjd/view"
				target="_blank"
				class="text-blue-500 underline">resume</a
			> for more details.
		</div>

		<div class="my-4 *:my-4">
			<div class="flex items-center">
				<Accenture class="mr-6 size-6 text-[#a100ff]" />
				<div>
					<span class="mr-4 text-xl font-bold"> Accenture In India </span>
					<p>Software Engineer</p>
				</div>
				<div class="ml-auto flex flex-col text-sm text-muted-foreground">
					<span>{formatDate('2023-08-08')}</span>
					<span>
						{getTimeGap('2023-08-08', new Date().toISOString().split('T')[0])}
					</span>
				</div>
			</div>
			<div class="flex items-center">
				<img src={tata} alt="Tata Group" class="mr-4 size-6" />
				<div>
					<span class="mr-4 text-xl font-bold">Tata Steel</span>
					<p>Summer Intern</p>
				</div>
				<div class="ml-auto flex flex-col text-right text-sm text-muted-foreground">
					<span>May 2023 - Jul 2022</span>
					<span>3 Months</span>
				</div>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import tata from '$lib/assets/images/Tata_Group.png';
	import { Icons } from '$lib/components/custom/icons';
	import { formatDate, getTimeGap } from '$lib/utils';
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
				<Icons.accenture class="size-6 text-[#a100ff] mr-6" />
				<div>
					<span class="text-xl font-bold mr-4"> Accenture In India </span>
					<p>Software Engineer</p>
				</div>
				<div class="flex flex-col ml-auto text-sm text-muted-foreground">
					<span>{formatDate('2023-08-08')}</span>
					<span>
						{getTimeGap('2023-08-08', new Date().toISOString().split('T')[0])}
					</span>
				</div>
			</div>
			<div class="flex items-center">
				<img src={tata} alt="Tata Group" class="size-6 mr-4" />
				<div>
					<span class="text-xl font-bold mr-4">Tata Steel</span>
					<p>Summer Intern</p>
				</div>
				<div class="flex flex-col ml-auto text-sm text-right text-muted-foreground">
					<span>May 2023 - Jul 2022</span>
					<span>3 Months</span>
				</div>
			</div>
		</div>
	</div>
</div>

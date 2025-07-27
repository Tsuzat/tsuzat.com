<script lang="ts">
	import TextGrow from '$lib/components/custom/TextGrow.svelte';
	import Icon from '@iconify/svelte';
	import { skills } from '$lib/utils';
</script>

<svelte:head>
	<title>About | Tsuzat</title>
</svelte:head>

<TextGrow text="About" duration={0.5} class="mt-12 text-2xl font-bold" />
<div class="animate-load-top fill-mode-both my-4 text-justify delay-300">
	<p>
		I'm Alok "Tsuzat" Singh — a software developer. I'm the creator of Edra and NeoSolarized.nvim.
		Passionate about building and learning, I am currently working on Smart Bug Triage solutions
		using GenAI within my organization. I build webapps, desktop apps, and mobile apps. You can look
		into my work experience here.
	</p>
</div>

<div class="animate-load-top fill-mode-both my-8 text-justify delay-600">
	<div class="text-2xl font-bold">Work Experience</div>
	<div class="mt-4 flex flex-col gap-4">
		<div class="flex items-center justify-between gap-4">
			<div class="flex flex-col gap-1">
				<span class="text-lg font-bold">Accenture</span>
				<span class="text-muted-foreground">Software Engineer</span>
			</div>
			<div class="text-muted-foreground flex flex-col gap-1 text-sm">
				<span>Aug 2023</span>
				<span>Hyderabad, India</span>
			</div>
		</div>
		<div class="flex items-center justify-between gap-4">
			<div class="flex flex-col gap-1">
				<span class="text-lg font-bold">TATA Steel</span>
				<span class="text-muted-foreground">Intern</span>
			</div>
			<div class="text-muted-foreground flex flex-col gap-1 text-sm">
				<span>3 Months</span>
				<span>Jamshedpur, India</span>
			</div>
		</div>
	</div>
</div>

<div class="animate-load-top fill-mode-both my-8 text-justify delay-900">
	<div class="my-4 text-2xl font-bold">Tech Skills</div>
	<div class="flex flex-col flex-wrap items-center justify-between gap-2 sm:flex-row">
		{#each skills as skill}
			<a
				href={skill.href}
				class="group bg-muted-foreground/10 dark:bg-muted/25 flex w-full items-center gap-2 rounded-lg p-2 sm:w-[calc(50%-1rem)]"
				target="_blank"
			>
				<Icon
					icon={skill.icon}
					width="24"
					height="24"
					class="bg-muted-foreground/20 dark:bg-muted/75 size-10 scale-100 rounded-md p-2 transition-all duration-500 group-hover:scale-110"
				/>
				<div class="flex flex-col">
					<span class="font-bold">{skill.name}</span>
					<span class="text-muted-foreground text-sm">{skill.description}</span>
				</div>
			</a>
		{/each}
	</div>
	<a href="/resume" class="dusration-500 my-8 transition-all hover:underline">Expore More...</a>
</div>

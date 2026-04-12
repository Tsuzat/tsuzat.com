<script lang="ts">
	import IconCloud from '$lib/components/custom/IconCloud.svelte';
	const slugs = [
		'typescript',
		'javascript',
		'go',
		'railway',
		'betterauth',
		'cloudflare',
		'tailwindcss',
		'svelte',
		'html5',
		'css3',
		'nodedotjs',
		'express',
		'drizzle',
		'railway',
		'postgresql',
		'firebase',
		'vercel',
		'docker',
		'git',
		'github',
		'gitlab'
	];
	let images = $state(slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`));
</script>

<svelte:head>
	<title>About | Tsuzat</title>
</svelte:head>

<h2
	class="animate-in fade-in zoom-in-95 blur-in-sm fill-mode-both my-4 text-2xl font-bold duration-1000"
>
	About
</h2>
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
	<div class="relative flex size-full items-center justify-center overflow-hidden">
		<IconCloud {images} />
	</div>
	<a href="/resume" class="dusration-500 my-8 transition-all hover:underline">Expore More...</a>
</div>

<script lang="ts">
	import { resolve } from '$app/paths';
	import IconCloud from '$lib/components/custom/IconCloud.svelte';
	import { mode } from 'mode-watcher';
	const images = $derived([
		'https://cdn.simpleicons.org/typescript/typescript',
		'https://cdn.simpleicons.org/javascript/javascript',
		'https://cdn.simpleicons.org/go/go',
		'https://cdn.simpleicons.org/python',
		'https://cdn.simpleicons.org/svelte',
		`https://cdn.simpleicons.org/railway/${mode.current === 'dark' ? 'white' : 'black'}`,
		'https://cdn.simpleicons.org/betterauth/betterauth',
		'https://cdn.simpleicons.org/cloud/cloudflare/cloud',
		'https://cdn.simpleicons.org/tailwindcss/tailwindcss',
		'https://cdn.simpleicons.org/html5/html5',
		'https://cdn.simpleicons.org/css/css',
		'https://cdn.simpleicons.org/nodedotjs/nodedotjs',
		`https://cdn.simpleicons.org/express/${mode.current === 'dark' ? 'white' : 'black'}`,
		'https://cdn.simpleicons.org/drizzle/drizzle',
		'https://cdn.simpleicons.org/hono',
		`https://cdn.simpleicons.org/bun/${mode.current === 'dark' ? 'white' : 'black'}`,
		'https://cdn.simpleicons.org/postgresql/postgresql',
		'https://cdn.simpleicons.org/firebase/firebase',
		`https://cdn.simpleicons.org/vercel/${mode.current === 'dark' ? 'white' : 'black'}`,
		'https://cdn.simpleicons.org/docker/docker',
		'https://cdn.simpleicons.org/git/git',
		`https://cdn.simpleicons.org/github/${mode.current === 'dark' ? 'white' : 'black'}`
	]);
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
	<a href={resolve('/resume')} class="dusration-500 my-8 transition-all hover:underline"
		>Expore More...</a
	>
</div>

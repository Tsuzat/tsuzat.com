<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import profile from '$lib/assets/profile.webp';
	import Accenture from '$lib/components/icons/accenture.svelte';
	import { CalendarDays } from 'lucide-svelte';
	import Github from '$lib/components/icons/github.svelte';
	import Linkedin from '$lib/components/icons/linkedin.svelte';
	import Email from '$lib/components/icons/email.svelte';
	import Twitter from '$lib/components/icons/twitter.svelte';
	import PostOverview from '$lib/components/custom/post-overview.svelte';
	import type { PageData } from './$types';
	import Project from '$lib/components/custom/project.svelte';
	import { MYPROJECTS, MYSKILLS } from '$lib/utils';
	import Skill from '$lib/components/custom/skill.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ArrowRight from '$lib/components/icons/moving/arrow-right.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const posts = data.posts;
</script>

<svelte:head>
	<title>Tsuzat | Alok Singh</title>
	<meta name="description" content="Alok 'Tsuzat' Singh's personal blog and portfolio website." />
	<meta name="keywords" content="Alok Singh, Tsuzat, blog, portfolio, personal website" />
	<meta name="author" content="Alok 'Tsuzat' Singh" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="app">
	<div class="my-16 flex flex-col items-center justify-center sm:flex-row">
		<Avatar.Root class="size-32 rounded-full">
			<Avatar.Image src={profile} alt="@tsuzat" />
			<Avatar.Fallback>AS</Avatar.Fallback>
		</Avatar.Root>
		<div class="intro sm:pl-12">
			<h1 class="my-4 text-center font-semibold tracking-wider text-muted-foreground sm:text-start">
				<a href="/about" class="text-3xl font-bold text-foreground">Hey, I'm Tsuzat.</a>
				<br />
				<span class="text-2xl text-muted-foreground">
					I'm a Software Engineer
					<HoverCard.Root>
						<HoverCard.Trigger
							href="https://www.accenture.com/"
							target="_blank"
							rel="noreferrer noopener"
							class="text-[#a100ff] underline transition-all duration-500 hover:drop-shadow-[0_0_1rem_#a100ff]"
							title="Accenture Hover Card"
						>
							@Accenture
						</HoverCard.Trigger>
						<HoverCard.Content class="w-50">
							<div class="flex justify-between space-x-4">
								<Accenture class="size-8 text-[#a100ff] " />
								<div class="space-y-1">
									<h4 class="text-sm font-semibold">Accenture</h4>
									<p class="text-sm">Let there be change</p>
									<div class="flex items-center pt-2">
										<CalendarDays class="mr-2 h-4 w-4 opacity-70" />
										<span class="text-xs text-muted-foreground"> Joined on August 2023 </span>
									</div>
								</div>
							</div>
						</HoverCard.Content>
					</HoverCard.Root>
				</span>
			</h1>
			<div
				class="socials my-4 flex items-center justify-center gap-8 text-muted-foreground sm:justify-start"
			>
				<a
					href="https://github.com/Tsuzat"
					target="_blank"
					class="flex items-center transition-all duration-500 hover:text-foreground hover:drop-shadow-[0_0_1rem_#000000] dark:hover:drop-shadow-[0_0_1rem_#FFFFFF]"
					title="Github Link"
				>
					<Github class="mr-2 size-5" />
					<span class="hidden sm:block">Github</span>
				</a>
				<a
					href="https://www.linkedin.com/in/alok-singh-tsuzat"
					target="_blank"
					class="flex items-center transition-all duration-500 hover:text-[#0077b5] hover:drop-shadow-[0_0_1rem_#0077b5]"
					title="Linkedin Link"
				>
					<Linkedin class="mr-2 size-5 text-[#0077b5]" />
					<span class="hidden sm:block">LinkedIn</span>
				</a>
				<a
					href="mailto:contact@tsuzat.com "
					target="_blank"
					class="flex items-center transition-all duration-500 hover:text-[#ea4335] hover:drop-shadow-[0_0_1rem_#ea4335]"
					title="Email"
				>
					<Email class="mr-2 size-5 text-[#ea4335]" />
					<span class="hidden sm:block">Email</span>
				</a>
				<a
					href="https://x.com/TheTsuzat"
					target="_blank"
					class="flex items-center transition-all duration-500 hover:text-foreground hover:drop-shadow-[0_0_1rem_#000000] dark:hover:drop-shadow-[0_0_1rem_#FFFFFF]"
					title="Twitter/X"
				>
					<Twitter class="mr-2 size-5" />
					<span class="hidden sm:block">X/Twitter</span>
				</a>
			</div>
		</div>
	</div>

	<div id="posts" class="my-8 flex flex-col gap-4">
		<div class="inline-flex items-center justify-center gap-2 text-center text-2xl font-bold">
			Currently Working With
			<Button variant="link" href="/about" class="p-0">
				<ArrowRight classes="p-4" />
			</Button>
		</div>
		<div class="flex flex-wrap items-center justify-center gap-4">
			{#each MYSKILLS as skill}
				<Skill {skill} />
			{/each}
		</div>
	</div>

	<div id="posts" class="my-8">
		<div class="mb-8 text-center text-2xl font-bold">Recent Project</div>
		<Project project={MYPROJECTS[0]} />
	</div>

	<div id="posts" class="my-8">
		<div class="mb-8 text-center text-2xl font-bold">Recent Posts</div>
		<div class="flex flex-col gap-4">
			{#each posts as post}
				<PostOverview {post} />
			{/each}
		</div>
	</div>
</div>

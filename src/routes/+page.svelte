<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import profile from '$lib/assets/images/profile.jpg';
	import { Icons } from '$lib/components/custom/icons';
	import { onMount } from 'svelte';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import type { PageData } from './$types';
	import PostOverView from '$lib/components/custom/PostOverView.svelte';
	import { toast } from 'svelte-sonner';

	export let data: PageData;

	const posts = data.posts;

	onMount(() => {
		toast.warning('This Website is work in progess. Most of components are yet to build', {
			duration: 10000
		});
	});
</script>

<svelte:head>
	<title>Tsuzat | Alok Singh</title>
</svelte:head>

<div class="content">
	<div class="flex items-center my-16 sm:flex-row flex-col">
		<Avatar.Root class="size-36 rounded-full">
			<Avatar.Image src={profile} alt="@tsuzat" />
			<Avatar.Fallback>AS</Avatar.Fallback>
		</Avatar.Root>
		<div class="intro sm:pl-12">
			<h1 class="text-muted-foreground font-semibold tracking-wider my-4 sm:text-start text-center">
				<a href="/about" class="text-3xl text-foreground font-bold">Hey, I'm Tsuzat.</a>
				<br />
				<span class="text-2xl text-muted-foreground">
					I'm a Software Engineer
					<HoverCard.Root>
						<HoverCard.Trigger
							href="https://www.accenture.com/"
							target="_blank"
							rel="noreferrer noopener"
							class="transition-all text-[#a100ff] underline hover:drop-shadow-[0_0_1rem_#a100ff] duration-500"
						>
							@Accenture
						</HoverCard.Trigger>
						<HoverCard.Content class="w-50">
							<div class="flex justify-between space-x-4">
								<Icons.accenture class="size-8 text-[#a100ff] " />
								<div class="space-y-1">
									<h4 class="text-sm font-semibold">Accenture</h4>
									<p class="text-sm">Let there be change</p>
									<div class="flex items-center pt-2">
										<Icons.calendar class="mr-2 h-4 w-4 opacity-70" />
										<span class="text-muted-foreground text-xs"> Joined August 2023 </span>
									</div>
								</div>
							</div>
						</HoverCard.Content>
					</HoverCard.Root>
				</span>
			</h1>
			<div
				class="socials flex items-center sm:justify-start justify-center gap-8 my-4 text-muted-foreground"
			>
				<a
					href="https://github.com/Tsuzat"
					target="_blank"
					class="flex items-center hover:text-foreground hover:drop-shadow-[0_0_1rem_#000000] dark:hover:drop-shadow-[0_0_1rem_#FFFFFF] transition-all duration-500"
				>
					<Icons.github class="size-5 mr-2" />
					<span class="hidden sm:block">Github</span>
				</a>
				<a
					href="https://www.linkedin.com/in/alok-singh-tsuzat"
					target="_blank"
					class="flex items-center hover:text-[#0077b5] hover:drop-shadow-[0_0_1rem_#0077b5] transition-all duration-500"
				>
					<Icons.linkedin class="size-5 mr-2 text-[#0077b5]" />
					<span class="hidden sm:block">LinkedIn</span>
				</a>
				<a
					href="mailto:contact@tsuzat.com "
					target="_blank"
					class="flex items-center hover:text-[#ea4335] hover:drop-shadow-[0_0_1rem_#ea4335] transition-all duration-500"
				>
					<Icons.email class="size-5 mr-2 text-[#ea4335]" />
					<span class="hidden sm:block">Email</span>
				</a>
				<a
					href="https://x.com/TheTsuzat"
					target="_blank"
					class="flex items-center hover:text-foreground hover:drop-shadow-[0_0_1rem_#000000] dark:hover:drop-shadow-[0_0_1rem_#FFFFFF] transition-all duration-500"
				>
					<Icons.x class="size-5 mr-2" />
					<span class="hidden sm:block">X/Twitter</span>
				</a>
			</div>
		</div>
	</div>

	<div id="posts" class="my-8">
		<div class="text-2xl font-bold mb-8">RECENT POSTS</div>
		<div class="flex flex-col gap-4">
			{#each posts as post}
				<PostOverView {post} />
			{/each}
		</div>
	</div>
</div>

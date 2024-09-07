<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import profile from '$lib/assets/images/profile.jpg';
	import { Icons } from '$lib/components/custom/icons/icons';
</script>

<svelte:head>
	<title>Home | Tsuzat</title>
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
					I'm a Software Engineer at
					<a
						class="accenture items-center transition-all text-[#a100ff] hover:drop-shadow-[0_0_1rem_#a100ff] duration-500"
						href="https://www.accenture.com/"
						target="_blank"
						rel="noreferrer"
					>
						Accenture
					</a>
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
					<Icons.github class="size-5 inline-block mr-2" />
					<span class="hidden sm:block">Github</span>
				</a>
				<a
					href="https://www.linkedin.com/in/alok-singh-tsuzat"
					target="_blank"
					class="flex items-center hover:text-[#0077b5] hover:drop-shadow-[0_0_1rem_#0077b5] transition-all duration-500"
				>
					<Icons.linkedin class="size-5 inline-block mr-2 text-[#0077b5]" />
					<span class="hidden sm:block">LinkedIn</span>
				</a>
				<a
					href="mailto:contact@tsuzat.com "
					target="_blank"
					class="flex items-center hover:text-[#ea4335] hover:drop-shadow-[0_0_1rem_#ea4335] transition-all duration-500"
				>
					<Icons.email class="size-5 inline-block mr-2 text-[#ea4335]" />
					<span class="hidden sm:block">Email</span>
				</a>
				<a
					href="https://x.com/TheTsuzat"
					target="_blank"
					class="flex items-center hover:text-foreground hover:drop-shadow-[0_0_1rem_#000000] dark:hover:drop-shadow-[0_0_1rem_#FFFFFF] transition-all duration-500"
				>
					<Icons.x class="size-5 inline-block mr-2" />
					<span class="hidden sm:block">X/Twitter</span>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	/* .accenture:hover {
		filter: drop-shadow(0 0 1rem #c96cff);
	} */
</style>

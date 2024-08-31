<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import profile from '$lib/assets/images/profile.webp';
	import { Icons } from '$lib/components/custom/icons/icons';
	import { Button } from '$lib/components/ui/button';
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
			<h1
				class="text-[28px] text-muted-foreground font-semibold tracking-wider my-4 sm:text-start text-center"
			>
				<a href="/about" class="text-foreground font-bold">Hey, I'm Tsuzat.</a>
				I'm a Software Engineer at
				<a
					class="items-center bg-[#a100ff] transition-all text-white hover:text-[#a100ff] hover:bg-transparent"
					href="https://www.accenture.com/"
					target="_blank"
					rel="noreferrer"
				>
					<!-- <Icons.accenture class="size-4 inline-block" /> -->
					Accenture
				</a>
			</h1>
			<div
				class="socials flex items-center sm:justify-start justify-center gap-8 my-4 text-muted-foreground"
			>
				<a
					href="https://github.com/Tsuzat"
					target="_blank"
					class="flex items-center hover:text-foreground transition-colors"
				>
					<Icons.github class="size-4 inline-block mr-2" />
					Github
				</a>
				<a
					href="https://www.linkedin.com/in/alok-singh-tsuzat"
					target="_blank"
					class="flex items-center hover:text-[#0077b5] transition-colors"
				>
					<Icons.linkedin class="size-4 inline-block mr-2 text-[#0077b5]" />
					LinkedIn
				</a>
				<a
					href="mailto:contact@tsuzat.com "
					target="_blank"
					class="flex items-center hover:text-[#ea4335] transition-colors"
				>
					<Icons.email class="size-4 inline-block mr-2 text-[#ea4335]" />
					Email
				</a>
				<a
					href="https://x.com/TheTsuzat"
					target="_blank"
					class="flex items-center hover:text-foreground transition-colors"
				>
					<Icons.x class="size-4 inline-block mr-2" />
					X
				</a>
			</div>
		</div>
	</div>
</div>

<style>
</style>

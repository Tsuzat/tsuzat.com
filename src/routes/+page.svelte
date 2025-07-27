<script lang="ts">
	import Card from '$lib/components/custom/Card.svelte';
	import TextGrow from '$lib/components/custom/TextGrow.svelte';
	import TextHoverCard from '$lib/components/custom/TextHoverCard.svelte';
	import Icons from '$lib/components/icons';

	import Blog from '$lib/components/custom/Blog.svelte';
	import { projects } from '$lib/utils';

	const { data } = $props();
</script>

<svelte:head>
	<title>Tsuzat | Alok Singh</title>
</svelte:head>

<div>
	<div class="my-8">
		<TextGrow class="my-4 text-3xl font-bold" text="Namaste, Tsuzat here!" duration={0.5} />
		<p class="animate-load-top fill-mode-both text-justify delay-300">
			Hi, I'm Alok "Tsuzat" Singh — a software developer
			<TextHoverCard href="https://www.accenture.com/" text="@accenture" classText="underline">
				<div class="flex items-center gap-2">
					<Icons.accenture class="size-6" />
					<div>Accenture India</div>
				</div>
				<div
					class="text-muted-foreground inline-flex w-full items-center justify-center gap-2 text-sm"
				>
					<Icons.calendar class="size-4" />
					<span>Aug 2023</span>
				</div>
			</TextHoverCard>, based in Hyderabad, India. I'm the creator of
			<TextHoverCard
				href="https://edra.tsuzat.com/"
				text="Edra"
				classText="underline"
				class="max-w-80"
			>
				<div class="flex items-center gap-2">
					<img src="https://edra.tsuzat.com/favicon.png" alt="Edra" class="size-6" />
					<div>Edra</div>
				</div>
				<div class="text-muted-foreground text-sm text-wrap">
					<span>Best Rich Text Editor, made for Svelte Developers with Tiptap </span>
				</div>
			</TextHoverCard>&
			<TextHoverCard
				href="https://github.com/Tsuzat/NeoSolarized.nvim"
				text="NeoSolarized.nvim"
				classText="underline"
				class="max-w-80"
			>
				<div class="flex items-center gap-2">
					<Icons.neovim class="size-6" />
					<div>NeoSolarized.nvim</div>
				</div>
				<div class="text-muted-foreground text-sm text-wrap">
					<span>NeoSolarized colorscheme for NeoVim with full transparency </span>
				</div>
			</TextHoverCard>Passionate about building and learning, I am currently working on
			<strong>Smart Bug Triage solutions using GenAI</strong>
			within my organization.
		</p>
	</div>
	<div class="animate-load-top fill-mode-both flex flex-wrap items-center gap-4 delay-700">
		{#snippet SocialLink(href: string, text: string)}
			<a
				{href}
				class="bg-muted/50 hover:bg-muted inline-flex items-center gap-2 rounded-full px-4 py-1 transition-all duration-500"
				target="_blank"
			>
				<span>{text}</span>
				<Icons.arrowUpRight class="text-muted-foreground size-4" />
			</a>
		{/snippet}
		{@render SocialLink('https://github.com/Tsuzat', 'Github')}
		{@render SocialLink('https://www.linkedin.com/in/alok-singh-tsuzat/', 'LinkedIn')}
		{@render SocialLink('mailto:contact@tsuzat.com', 'Email')}
		<!-- {@render SocialLink('https://bsky.app/profile/tsuzat.com', 'Bluesky')} -->
		{@render SocialLink('https://x.com/tsuzatdotcom', 'X (Twitter)')}
		{@render SocialLink('/resume', 'Resume')}
	</div>
	<div class="animate-load-top fill-mode-both mt-8 delay-1000">
		<span class="text-muted-foreground font-semibold">Projects</span>
		<div class="mt-4 flex flex-col flex-wrap items-center justify-between sm:flex-row">
			{#each projects as project}
				<Card {project} />
			{/each}
		</div>
	</div>
	<div class="animate-load-top fill-mode-both my-4 flex flex-col gap-4 delay-1000">
		<span class="text-muted-foreground font-semibold">Blogs</span>
		{#each data.posts as post}
			<Blog
				slug={post.slug}
				title={post.metadata.title}
				summary={post.metadata.summary}
				publishedAt={post.metadata.publishedAt}
				readTime={post.metadata.readTime}
			/>
		{/each}
	</div>
</div>

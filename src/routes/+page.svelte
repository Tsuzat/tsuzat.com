<script lang="ts">
	import Card from '$lib/components/custom/Card.svelte';
	import TextHoverCard from '$lib/components/custom/TextHoverCard.svelte';
	import Icons from '$lib/components/icons';

	import Blog from '$lib/components/custom/Blog.svelte';
	import { projects } from '$lib/utils';
	import { Button } from '$lib/components/ui/button/index.js';

	const { data } = $props();
</script>

<svelte:head>
	<title>Tsuzat | Alok Singh</title>
	<!-- Cal element-click embed code begins -->
	<script type="text/javascript">
		(function (C, A, L) {
			let p = function (a, ar) {
				a.q.push(ar);
			};
			let d = C.document;
			C.Cal =
				C.Cal ||
				function () {
					let cal = C.Cal;
					let ar = arguments;
					if (!cal.loaded) {
						cal.ns = {};
						cal.q = cal.q || [];
						d.head.appendChild(d.createElement('script')).src = A;
						cal.loaded = true;
					}
					if (ar[0] === L) {
						const api = function () {
							p(api, arguments);
						};
						const namespace = ar[1];
						api.q = api.q || [];
						if (typeof namespace === 'string') {
							cal.ns[namespace] = cal.ns[namespace] || api;
							p(cal.ns[namespace], ar);
							p(cal, ['initNamespace', namespace]);
						} else p(cal, ar);
						return;
					}
					p(cal, ar);
				};
		})(window, 'https://app.cal.com/embed/embed.js', 'init');
		Cal('init', 'qc', { origin: 'https://app.cal.com' });
		// Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
		// `data-cal-link="tsuzat/qc"`
		// data-cal-namespace="qc"
		// `data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'`
		Cal.ns.qc('ui', { hideEventTypeDetails: false, layout: 'month_view' });
	</script>
	<!-- Cal element-click embed code ends -->
</svelte:head>

<div>
	<div class="my-12">
		<h2
			class="animate-in fade-in zoom-in-95 blur-in-sm fill-mode-both my-4 text-2xl font-bold duration-1000"
		>
			Hi, Tsuzat here!
		</h2>
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
				text="Edra,"
				classText="underline"
				class="max-w-80"
			>
				<div class="flex items-center gap-2">
					<img src="https://edra.tsuzat.com/favicon.png" alt="Edra" class="size-6" />
					<div>Edra</div>
				</div>
				<div class="text-muted-foreground text-sm text-wrap">
					<span>Best Rich Text Editor, made for Svelte Developers with Tiptap</span>
				</div>
			</TextHoverCard>
			<TextHoverCard
				href="https://www.nota.ink/"
				text="Nota"
				classText="underline"
				class="max-w-80"
			>
				<div class="flex items-center gap-2">
					<img src="https://www.nota.ink/favicon.ico" alt="Nota" class="size-6" />
					<div>Nota</div>
				</div>
				<div class="text-muted-foreground text-sm text-wrap">
					<span>A fast, modern note taking app with native AI features </span>
				</div>
			</TextHoverCard>
			&
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
			<strong class="underline"
				><a href="/blogs/smart-bug-triage-poc">Smart Bug Triage solutions using GenAI</a>
			</strong>
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
		{@render SocialLink('/resume', 'Resume')}
		<Button data-cal-link="tsuzat/qc" data-cal-namespace="qc" class="rounded-full px-2! py-px!">
			<Icons.calendar />
			<span>Book a Meeting</span>
		</Button>
	</div>
	<div class="animate-load-top fill-mode-both mt-8 delay-1000">
		<span class="text-muted-foreground font-semibold">Projects</span>
		<div class="mt-4 flex flex-col flex-wrap items-center justify-between sm:flex-row">
			{#each projects as project (project.title)}
				<Card {project} />
			{/each}
		</div>
	</div>
	<div class="animate-load-top fill-mode-both my-4 flex flex-col gap-4 delay-1000">
		<span class="text-muted-foreground font-semibold">Blogs</span>
		{#each data.posts as post, idx (idx)}
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

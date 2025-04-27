<script lang="ts">
	import TextGrow from '$lib/components/custom/TextGrow.svelte';
	import TextHoverCard from '$lib/components/custom/TextHoverCard.svelte';
	import Icons from '$lib/components/icons';
</script>

<svelte:head>
	<title>Tsuzat | Alok Singh</title>
</svelte:head>

<div>
	<div class="my-8">
		<TextGrow class="my-4 text-3xl font-bold" text="Namaste, Tsuzat here!" />
		<p class="text-justify">
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
			</TextHoverCard>, based in Hyderabad, India.
			<br />
			I'm the creator of
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
					<span>Best Rich Text Editor, made for Svelte Developers with Tiptap </span>
				</div>
			</TextHoverCard>
			NeoSolarized.nvim. Passionate about building and learning, I am currently working on Smart Bug
			Triage solutions using GenAI within my organization.
		</p>
	</div>
</div>

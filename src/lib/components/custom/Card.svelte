<script lang="ts">
	import { goto } from '$app/navigation';
	import * as Card from '$lib/components/ui/card';

	interface Props {
		img: string;
		title: string;
		description: string;
		href: string;
		class?: string;
	}

	const { img, title, description, href }: Props = $props();
</script>

<Card.Root
	class="hover:bg-muted dark:hover:bg-muted/20 bg-background w-full scale-100 border-0 p-0 shadow-none transition-all duration-500 hover:z-50 hover:scale-[102%] sm:w-1/2"
	onclick={() => goto(href)}
>
	<Card.Content class="flex flex-col gap-2 p-4">
		<img src={img} alt={title} class="h-56 w-full rounded-lg object-cover" />
		<div class="text-foreground text-center text-lg font-bold">{title}</div>
		<div class="text-muted-foreground text-center text-sm">{description}</div>
	</Card.Content>
</Card.Root>

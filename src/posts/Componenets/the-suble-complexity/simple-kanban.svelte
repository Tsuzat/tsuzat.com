<script lang="ts">
	import { onMount } from 'svelte';
	import { dndzone, type DndEvent } from 'svelte-dnd-action';

	interface Board {
		id: string;
		name: string;
		description: string;
	}

	interface Section {
		id: string;
		name: string;
		status: 'todo' | 'in-progress' | 'completed';
	}

	interface Card {
		id: string;
		name: string;
		description: string;
		order: number;
		sectionId: string;
	}

	const board: Board = {
		id: 'board',
		name: 'Simple Kanban Board',
		description: 'Storing the card order in card itself as a number'
	};

	const sections: Section[] = [
		{
			id: 'section1',
			name: 'To Do',
			status: 'todo'
		},
		{
			id: 'section2',
			name: 'In Progress',
			status: 'in-progress'
		},
		{
			id: 'section3',
			name: 'Completed',
			status: 'completed'
		}
	];

	let cards: Card[] = $state([]);

	onMount(() => {
		// create 4 cards for each section
		for (const section of sections) {
			for (let i = 0; i < 4; i++) {
				// get a random uuid
				const card: Card = {
					id: crypto.randomUUID(),
					name: `Card ${i + 1}`,
					description: `This is a card for section ${section.name}`,
					order: i,
					sectionId: section.id
				};
				cards.push(card);
			}
		}
	});

	function transformDraggedElement(element?: HTMLElement) {
		if (element) {
			element.style.opacity = '0.5';
			element.style.outline = 'none';
			element.style.border = '1px solid hsl(var(--primary))';
		}
	}

	async function handleDrop(event: CustomEvent<DndEvent<Card>>) {
		const { items } = event.detail;
	}

	function handleDragStart(event: CustomEvent<DndEvent<Card>>) {
		const { items } = event.detail;
	}
</script>

<div class="flex h-fit w-full gap-2 overflow-scroll">
	{#each sections as section (section.id)}
		{@const cardsForSection = cards.filter((c) => c.sectionId === section.id)}
		<div
			use:dndzone={{
				items: cardsForSection,
				type: 'columns',
				dragDisabled: false,
				transformDraggedElement,
				dropTargetStyle: {
					outline: 'none'
				}
			}}
			onconsider={handleDragStart}
			onfinalize={handleDrop}
		>
			{#each cardsForSection as card (card.id)}
				<div>
					<h2>{card.name}</h2>
					<p>{card.description}</p>
				</div>
			{/each}
		</div>
	{/each}
</div>

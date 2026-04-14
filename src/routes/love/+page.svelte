<script lang="ts">
	import { enhance } from '$app/forms';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="mt-10 flex h-screen items-start justify-center p-4">
	<Card.Root class="w-full max-w-md shadow-lg transition-all duration-300 hover:shadow-xl">
		<Card.Header class="space-y-1">
			<Card.Title level={2} class="text-center text-3xl font-bold">Request Pictures</Card.Title>
			<Card.Description class="text-center">
				Select a date and enter your nickname to request pictures.
			</Card.Description>
		</Card.Header>
		<Card.Content>
			<form
				use:enhance
				action="?/getpic"
				method="POST"
				enctype="multipart/form-data"
				class="space-y-6"
			>
				<div class="space-y-2">
					<label
						for="date"
						class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Select A Date
					</label>
					<input
						type="date"
						id="date"
						name="date"
						required
						class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
					/>
				</div>
				<div class="space-y-2">
					<label
						for="nickname"
						class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Nicknames
					</label>
					<input
						type="text"
						id="nickname"
						name="nickname"
						placeholder="Nicknames"
						required
						class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
					/>
				</div>
				<div class="space-y-2">
					<label
						for="number"
						class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Picture Number
					</label>
					<input
						type="number"
						id="number"
						name="number"
						max="2"
						min="1"
						placeholder="1 or 2"
						required
						class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
					/>
				</div>
				<Button type="submit" class="w-full">Request Pictures</Button>
			</form>
		</Card.Content>
		{#if form}
			<Card.Footer class="border-t p-4">
				<p class="w-full text-center text-sm font-medium text-red-500">
					{form.message}
				</p>
			</Card.Footer>
		{/if}
	</Card.Root>
</div>

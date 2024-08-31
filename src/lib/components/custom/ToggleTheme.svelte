<script lang="ts">
	import { resetMode, setMode } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Icons } from './icons/icons';
	export let variant: 'link' | 'ghost' = 'link';
	export let size: 'icon' | undefined = undefined;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} {variant} {size} class="p-0 m-0 h-4 sm:h-9 text-muted-foreground">
			<Icons.sun class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Icons.moon
				class="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle Theme</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => setMode('light')}>
			<span>Light</span>
		</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => setMode('dark')}>
			<span>Dark</span>
		</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => resetMode()}>
			<span>System</span>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>

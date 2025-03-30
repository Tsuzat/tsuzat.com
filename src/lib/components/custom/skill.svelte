<script lang="ts">
	import type { Skill } from '$lib/utils';

	interface Props {
		skill: Skill;
	}

	let { skill }: Props = $props();
</script>

<div
	class="border-1 group flex w-60 cursor-pointer items-center gap-2 rounded-lg border-border border-opacity-0 bg-muted/25 p-2 transition-all duration-500 hover:border-opacity-100 hover:bg-muted/80 hover:shadow-lg"
>
	<div class="size-fit rounded p-2" style={`background-color: ${skill.color}25`}>
		<skill.icon class="h-6 w-6 scale-100 transition-all duration-500 group-hover:scale-110" />
	</div>
	<div>
		<div class="text-lg font-semibold">{skill.title}</div>
		<div class="text-sm text-muted-foreground">{skill.description}</div>
	</div>
</div>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { enhance } from '$app/forms';
	import TiltCard from '$lib/components/spell/tilt-card/tilt-card.svelte';
	import { resolve } from '$app/paths';
	const { form } = $props();
</script>

<div
	class="inset-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-linear-to-b from-primary/20 via-background/50 to-background"
>
	<TiltCard tiltLimit={5} scale={1.01} class="size-fit rounded-lg!">
		<Card.Root class="w-120 max-w-full border bg-transparent p-4">
			<Card.Header class="text-center">
				<Card.Title class="text-xl">Login to Tsuzat</Card.Title>
				<Card.Description>Sign In to Tsuzat to continue with Github</Card.Description>
			</Card.Header>
			<Card.Content>
				<form method="post" action="?/signInSocial" use:enhance>
					<Button class="w-full" type="submit">
						<svg
							viewBox="0 0 1024 1024"
							xmlns="http://www.w3.org/2000/svg"
							width="1024"
							height="1024"
							fill="none"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0"
								clip-rule="evenodd"
							/></svg
						>
						Sign in with GitHub</Button
					>
				</form>
			</Card.Content>
			<Card.Footer class="text-red-600">{form?.message}</Card.Footer>
			<div
				class="z-50 text-center text-xs text-balance text-muted-foreground *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-primary"
			>
				By signing in with GitHub, you agree to our <a href={resolve('/terms')}>Terms of Service</a>
				and <a href={resolve('/privacy')}>Privacy Policy</a>.
			</div>
		</Card.Root>
	</TiltCard>
</div>

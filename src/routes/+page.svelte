<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { SignedIn, SignedOut } from 'sveltefire';
	import {
		GoogleAuthProvider,
		signInWithPopup,
		GithubAuthProvider,
		type Auth
	} from 'firebase/auth';
	import Navbar from '$lib/components/custom/Navbar.svelte';

	const provider = new GoogleAuthProvider();
</script>

<svelte:head>
	<title>Alok Singh | Tsuzat</title>
</svelte:head>

<SignedIn let:user let:signOut>
	<p>Howdy, {user.uid}</p>
	<p>{user.email}</p>
	<Button on:click={signOut}>Sign Out</Button>
</SignedIn>

<SignedOut let:auth>
	<p>You must be signed in to see this!</p>
	<Button on:click={() => signInWithPopup(auth, provider)}>Sign In</Button>
</SignedOut>

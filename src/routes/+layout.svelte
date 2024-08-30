<script lang="ts">
	import '@fontsource-variable/dm-sans';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { FirebaseApp } from 'sveltefire';
	import { auth, firestore } from '$lib/firebase';
	import Navbar from '$lib/components/custom/Navbar.svelte';
</script>

<ModeWatcher />

<FirebaseApp {auth} {firestore}>
	<Navbar />
	<slot />
</FirebaseApp>

<script>
import { onMount } from "svelte";
import Navbar from "../assets/navbar.svelte";

let res = ''
let arr = ['hi', 'my', 'name', 'is', 'ahmad']

onMount(async () => {
    const response = await fetch('http://127.0.0.1:8080/api',{
        method: 'GET',
    });
    res = (await response.json()).res;
});
</script>

<main>
	<Navbar page='Gym'></Navbar>
	<h1 class="text-pink-500 font-bold">Nice {res}</h1>
	<ul>
	{#each arr as a}
		<li>{a}</li>
	{/each}
	</ul>
</main>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
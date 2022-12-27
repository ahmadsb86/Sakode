<script>
import Default from "./default.svelte";
export let page = 'home'
const pages = ['Home', 'About', 'Gym', 'Contests']
const fileMap = {
    'Home': '',
    'About': 'about',
    'Gym': 'gym',
    'Contests': 'contests'
}
</script>

<main>
    <div class="flex justify-evenly w-screen py-8 fixed">
    {#each pages as p}
        {#if p==page}
            <a href='/{fileMap[p]}' class="text-green-500 text-center underline underline-offset-8">{p}</a> 
        {:else}
            <a href='/{fileMap[p]}' class="text-neutral-200 text-center">{p}</a> 
        {/if}
    {/each}
    </div>
</main>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
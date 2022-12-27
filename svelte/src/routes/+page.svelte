<script>
import Navbar from "./assets/navbar.svelte";
import Hero from "./home/hero.svelte";
import Hammer from "hammerjs"
import { onMount } from "svelte";

let prevD = 0
let canScroll = true
function scrollHandler(e){
    const d = e.deltaY
    if(d>prevD+25 && prevD>0 && canScroll){
        scrollPlus(1)
        canScroll = false
        setTimeout(()=>{canScroll=true}, 500)
    }if(d<prevD-25 && prevD<0 && canScroll){
        scrollPlus(-1)
        canScroll = false
        setTimeout(()=>{canScroll=true}, 500)
    }
    prevD = d
}
let nail;
onMount(()=>{
    var hammer = new Hammer(nail);
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
    hammer.on("swipeup", function () { 
        scrollPlus(1)
    });
    hammer.on("swipedown", function () { 
        scrollPlus(-1)
    });
})


function scrollPlus(dir){
    console.log(dir)
}

</script>

<svelte:window on:mousewheel|preventDefault={scrollHandler}  />

<main class="">
    <div on:scroll={scrollHandler} bind:this={nail}>
        <Navbar page='Home'></Navbar>
        <Hero></Hero>
        <!-- <div class="h-32"> hello </div> -->
    </div>
</main>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;


</style>
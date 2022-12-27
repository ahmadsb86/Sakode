
<main>
    <div class="flex flex-col justify-center items-center h-screen">
        <h1 class="mx-16 text-4xl md:text-6xl mb-3 font-semibold mono text-center text-green-600">PAKODE</h1>
        <div class="text-neutral-200 inline " >
            <p class="mono text-center mx-12 text-sm md:text-lg">Bringing Competitive Programming to Pakistan.</p>
        </div>
        <a href="#" class=" rounded-sm text-xs text-neutral-200 py-3 px-4 my-12 bg-green-700 hover:bg-green-800 hover:-translate-y-1 hover:shadow-lg transition-transform">Begin your journey</a>
        <div class="text-neutral-200 mt-24 md:mt-12 bouncy text-xs text-center">Scroll Down<br/>v</div>
    </div>
</main>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
.bouncy{
  animation: bounce;
  animation-duration: 1s; 
  animation-iteration-count:infinite;
  animation-timing-function: ease;
}

@keyframes bounce { 
  0%, 50%, 100% {transform: translateY(0);} 
  50% {transform: translateY(20px);} 
  100% {transform: translateY(0px);} 
}

</style>

<script>
    export let project;
    const filepath = "/projects/" + project.slug;
    let hovered = false;
    let width;
    import { fade } from "svelte/transition";
</script>

<svelte:window bind:innerWidth={width} />

<a 
    class="w-60 h-60 border-2 rounded-[50px] shadow-xl m-5 overflow-hidden grid transform transition-all sm:hover:scale-105" 
    on:pointerenter={() => {hovered = (width >= 640); console.log(width)}} 
    on:pointerleave={() => {hovered = false}} 
    href={filepath}
>
    {#if hovered}
        <div 
            in:fade={{duration: 200}}
            out:fade={{duration: 200}}
            class="w-60 h-60 col-[1/2] row-[1/2] bg-base-100 flex justify-center items-center bg-white text-black"
        >
        <span class="font-bold text-2xl text-center">{project.name}</span>
        </div>
    {:else}
        <div 
            in:fade={{duration: 200}} 
            out:fade={{ duration: 200}}
            class="col-[1/2] row-[1/2] w-max h-max bg-white "
        >
            <img src={project.iconImage.url} alt="icon" class="object-fill w-60 h-60" />
        </div>
    {/if}

</a>

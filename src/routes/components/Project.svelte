
<script>
    export let project;
    const filepath = "/projects/" + project.slug;
    let hovered = false;
    import { fade } from "svelte/transition";
</script>


<a class="w-60 h-60 border-2 rounded-[50px] shadow-xl m-5 overflow-hidden grid" on:pointerenter={() => {hovered = true}} on:pointerleave={() => {hovered = false}} href={filepath}>
    {#if hovered}
        <div 
            in:fade={{duration: 200}}
            out:fade={{duration: 200}}
            class="w-60 h-60 col-[1/2] row-[1/2] bg-base-100 flex justify-center items-center"
        >
        <span class="font-bold text-2xl text-center">{project.name}</span>
        </div>
    {:else}
        <div 
            in:fade={{duration: 200}} 
            out:fade={{ duration: 200}}
            class="col-[1/2] row-[1/2] w-max h-max"
        >
            <img src={project.iconImage.url} alt="icon" class="object-fill w-60 h-60" />
        </div>
    {/if}

</a>

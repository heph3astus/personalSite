<script>
    import { scrollto } from "svelte-scrollto";
    export let main;
    const header = `header-item ${main ?"":"hover:bg-neutral text-white drop-shadow-md"}`
</script>


<div 
    class={`navbar font-extrabold text-xl pl-7 pr-5 ${main?"":"bg-primary"}`}
>
    <a href="/" class="navbar-start">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="/logo.svg" class="h-8 mr-3">
        <span class={`${main ? "" : "text-white drop-shadow-md"}`}>Eleanor Olson</span>
    </a>
    <div class="navbar-end">
        {#if main === true}
            <span use:scrollto={"#about"} class={header}>About Me</span>
            <span use:scrollto={"#projects"} class={header}>Projects</span>
            <span use:scrollto={"#contact"} class={header}>Contact</span>
        {:else}
            <a href="/#about" class={header}>About Me</a>
            <a href="/#projects" class={header}>Projects</a>
            <a href="/#contact" class={header}>Contact</a>
        {/if}
    </div>
</div>

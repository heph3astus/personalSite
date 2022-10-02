<script>
    import "../app.css"
    export const prerender = true;
    let theme;
    import DarkMode from "svelte-dark-mode";
</script>

<DarkMode bind:theme />

<div data-theme={theme==="light"?"bumblebee":"siteTheme"}>
    <slot></slot>
</div>

<script>
    export let data;
    import Navbar from "../../components/Navbar.svelte";
    import SvelteMarkdown from "svelte-markdown";
    const source = data.project.description;
</script>


<svelte:head>
    <title>{data.project.name}</title>
</svelte:head>

<Navbar main={false} />
<div class="w-full flex flex-col items-center justify-center bg-brimary">
    <div class="max-w-[1000px] mt-10 mx-10">
        <img src={data.project.headerImage[0].url} alt="header" /> 
    </div>
    <div class="prose prose-xl mt-10 prose-h2:w-full prose-h2:flex prose-h2:items-center prose-image mx-10">
        <SvelteMarkdown {source} />
    </div> 
    <div>
        <div class="flex my-16 rounded-xl shadow-sm bg-accent text-white">
            <a href={data.project.demo} class="underline font-bold text-xl cursor-pointer m-5">{data.project.name} Website</a>
            <a href={data.project.sourceCode} class="underline font-bold text-xl cursor-pointer m-5">Source Code</a>
        </div>
    </div>
</div>

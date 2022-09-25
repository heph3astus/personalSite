
<script>
    import MainProject from './components/MainProject.svelte'
    import Project from './components/Project.svelte'
    export let data
    import SvelteMarkdown from 'svelte-markdown'
    import Navbar from './components/Navbar.svelte';
    const source = data.pInfo.bio
    
    const mainProject = data.projects.find(element => data.pInfo.mainProject === element.slug)


</script>

<svelte:head>
    <title>Eleanor Olson</title>
</svelte:head>

<Navbar main={true} />

<div class="hero w-full flex h-screen flex-col bg-primary lg:py-36">
    <div class="hero-content w-full flex flex-col sm:flex-row items-center justify-center overflow-hidden">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={data.pInfo.picture.url} alt="personal photo" class="object-contain h-64 border-4 border-base-100 mt-5 lg:mr-10 shadow-xl rounded-full"> 
        <span class=" text-base-100 drop-shadow-md shadow-accent text-7xl lg:text-9xl text-center sm:text-left font-bold w-min underline">
            {data.pInfo.name}
        </span>
        
    </div>
    <div class="hero-content text-base-200 font-bold mt-10 p-0 text-xl text-center">
        {data.pInfo.intro}
    </div>
</div>
<div id="about" class="bg-base-100 my-16 mx-10 sm:mx-16 flex flex-col">
    <span class="about-header">Hi, I'm Eleanor</span>
    <div class="flex my-20 justify-center">
            <div class="flex flex-col prose prose-xl">
                <SvelteMarkdown {source} />
            </div>
    </div>
    <span class="about-header">Techonologies and Skills</span>
    <ul class="mt-10 sm:ml-36 flex flex-col items-center sm:items-start sm:flex-none">
        {#each data.skills as skill, i}
            {#if skill.displayOnMain}
                <li class="flex items-center">
                <!-- svelte-ignore a11y-missing-attribute -->
                    <img src={skill.icon.url} class="h-24 w-24 object-contain mr-8 sm:mr-16 ">
                    <span class="text-5xl sm:text-7xl font-bold text-accent">{skill.skillName}</span>
            </li>
            {/if}
            {#if i < data.skills.length-1}
                <div class="h-10"></div>
            {/if}
        {/each}
    </ul>
</div>

<div id="projects" class=" flex flex-col m-16">
    <span class="about-header">My Current Main Project</span>
    <MainProject project={mainProject} />
    <span class="about-header">All My Projects</span>
    <div class="mt-16 sm:ml-16 flex flex-col sm:flex-row items-center">
    {#each data.projects as project}
        <Project project={project} />
    {/each}
    </div>
</div>


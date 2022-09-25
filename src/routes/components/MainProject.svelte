
<script>
    export let project;
    const filepath = "/projects/" + project.slug;
</script>

<div class="w-3/4 mx-16 my-16 flex items-center">
        <a href={filepath} class="w-2/3"><img src={project.headerImage[1].url} alt="" class="rounded-xl border-base-200 border-2 shadow-md transition-all transform hover:scale-105 hover:cursor-pointer"></a>
    <div class="ml-16 mt-8 w-max">
        <img src={project.headerImage[0].url} alt="">
        <p class="mt-8 ml-2 font-bold">{project.blurb}</p>
        <div class="w-full flex justify-center mt-16">
        <a href={filepath}>
            <button class="font-bold underline text-xl">Learn More</button>
        </a>
        </div>
    </div>
</div>

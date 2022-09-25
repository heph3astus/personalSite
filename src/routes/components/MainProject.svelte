
<script>
    export let project;
    const filepath = "/projects/" + project.slug;
</script>

<a href={filepath} class="hover:cursor-default flex justify-center">
    <div class="w-max sm:w-auto lg:w-3/4 md:h-1/2 lg:h-auto sm:mx-16 my-16 sm:mt-2 flex items-center border-2 sm:border-0 border-base-200 rounded-3xl shadow-lg sm:shadow-none p-3">
        <div class="w-0 invisible md:w-1/2 lg:w-2/3 sm:visible"><img src={project.headerImage[1].url} alt="" class="rounded-xl border-base-200 border-2 shadow-md transition-all transform hover:scale-105 hover:cursor-pointer"></div>
        <div class="sm:ml-8 mt-8 flex flex-col items-center justify-center md:w-1/2 h-max">
            <img src={project.headerImage[0].url} alt="" class="w-max hover:cursor-pointer">
            <p class="mt-8 sm:ml-2 font-bold text-base sm:text-base text-center sm:text-left">{project.blurb}</p>
            <div class="w-full flex justify-center mt-16">
                <button class="font-bold underline text-xl invisible sm:visible">Learn More</button>
            </div>
        </div>
    </div>
</a>

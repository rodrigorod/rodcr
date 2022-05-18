<template>
    <div class="mt-32 font-black text-blue-light">
        <Title :title="'About me'"></Title>
        <div class="bg-diagonal">
            <div class="flex items-center pt-48 pl-16">
                <div>
                    <img class="border-8 w-64 rounded-full border-white" src="@/assets/img/rod.png" alt="">
                </div>
                <p class=" text-white text-sm font-light w-1/2 -mt-32 ml-32">
                Hi, I'm Rodrigo Carraco Rodrigues, a passionate Back-End developer currently apprentice at Liip as a Back-End/Front-End. Since I’m 4 years old, I am a strong IT passionate, not only web development, I enjoy everything in IT, well... except Microsoft Office 😅.
                <br><br>
                In my free time I enjoy to work on personnal projects, but I like to get off my computer too. I love Karting and Motorsport in general. And yeah, as an IT I must play video games.
                </p>
            </div>
        </div>
        <Title :title="'My skillsets'"></Title>
        <div class="bg-skillsets"></div>
    </div>
</template>
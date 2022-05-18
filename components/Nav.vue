<template>
    <div class="bg-wave flex justify-end z-20 fixed top-0">
        <ul class="flex gap-12  font-medium text-lg my-8 mx-16">
            <li class="hover:text-blue-primary">
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="hover:text-blue-primary">
                <a href="#about">About</a>
            </li>
            <li class="hover:text-blue-primary">
                <a href="#projects">Projects</a>
            </li>
            <li class="hover:text-blue-primary">
                <a href="#contact">Contact</a>
            </li>
            <li class="hover:text-blue-primary">
                <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
        </ul>
    </div>
</template>
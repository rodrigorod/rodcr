<template>
    <div class="my-32">
        <div class="flex">
            <div class="mx-32">
                <h1 class="text-8xl font-black mt-64  text-gray-primary">Hi.👋<br>I'm Rodrigo.</h1>
                <a href="#"  class="text-white font-thin bg-gradient rounded px-4 py-2 ease-in-out duration-300 hover:scale-95 mt-8">Download my resume</a>
                <div class="flex items-center gap-8 mt-4">
                    <a href="https://github.com/rodrigorod?tab=repositories" class="hover:text-gray-primary text-blue-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 35 35">
                            <path fill="currentColor" fill-rule="evenodd" d="M17.5 0C7.831 0 0 8.03 0 17.943c0 7.94 5.01 14.645 11.966 17.023.875.157 1.203-.382 1.203-.853 0-.426-.022-1.839-.022-3.341-4.397.83-5.535-1.1-5.885-2.109-.196-.515-1.05-2.108-1.793-2.534-.613-.337-1.488-1.166-.022-1.189 1.378-.022 2.362 1.301 2.69 1.84 1.575 2.713 4.091 1.95 5.097 1.48.153-1.167.613-1.952 1.116-2.4-3.894-.449-7.962-1.996-7.962-8.86 0-1.95.678-3.565 1.793-4.821-.175-.449-.787-2.288.175-4.755 0 0 1.466-.471 4.813 1.839a15.85 15.85 0 0 1 4.375-.606c1.487 0 2.975.202 4.375.606 3.347-2.333 4.812-1.84 4.812-1.84.963 2.468.35 4.307.175 4.756C28.022 13.435 28.7 15.027 28.7 17c0 6.885-4.09 8.41-7.984 8.859.634.56 1.18 1.637 1.18 3.32 0 2.399-.021 4.328-.021 4.933 0 .471.328 1.032 1.203.853a17.57 17.57 0 0 0 8.631-6.546A18.283 18.283 0 0 0 35 17.943C35 8.029 27.169 0 17.5 0Z" clip-rule="evenodd"/>
                        </svg>
                    </a>
                    <a href="https://codepen.io/RodriRod" class="hover:text-gray-primary text-blue-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 35 35">
                            <g clip-path="url(#a)">
                                <path fill="currentColor" fill-rule="evenodd" d="M16.584.278a1.654 1.654 0 0 1 1.832 0l15.843 10.514c.462.306.741.824.741 1.38v10.657c0 .555-.277 1.074-.74 1.381L18.415 34.725a1.66 1.66 0 0 1-1.832 0L.741 24.209A1.656 1.656 0 0 1 0 22.829V12.172c0-.554.277-1.074.74-1.381L16.585.278ZM3.314 15.259v4.46l3.336-2.246-3.337-2.214Zm6.324 4.197-5 3.365 11.205 7.437v-6.683L9.64 19.456h-.002Zm9.519 4.119v6.682l11.206-7.438-5.003-3.363-6.203 4.119Zm9.192-6.1 3.34 2.245v-4.462l-3.34 2.216Zm1.999-5.303-4.973 3.3-6.218-4.182V4.745l11.19 7.427ZM15.843 4.745v6.543l-6.217 4.183-4.974-3.3 11.191-7.426Z" clip-rule="evenodd"/>
                                <path fill="currentColor" fill-rule="evenodd" d="m17.5 14.168-4.886 3.287 4.886 3.242 4.885-3.242-4.885-3.287Z" clip-rule="evenodd"/>
                            </g>
                            <defs>
                                <clipPath id="a">
                                <path fill="#fff" d="M0 0h35v35H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
            <div>
                <CodeCard/>
                <div class="z-0 absolute -top-0 -right-0">
                    <img src="@/assets/img/square.svg" alt="square image">
                </div>
            </div>
        </div>
        <div id="about"><About/></div>
        <div id="projects"><Projects/></div>
        <div id="contact"><Contact/></div>
    </div>
</template>
<template>
    <div>
        <Title :title="'Contact'"></Title>
        <div class="w-2/3 mx-auto mt-16 flex h-96 items-center">
            <div class="bg-blue-secondary p-8 w-1/3 text-center rounded-lg flex flex-col items-center h-64">
                <svg class="m-8" xmlns="http://www.w3.org/2000/svg" width="169" height="102" fill="none" viewBox="0 0 169 102">
                    <path fill="#fff" d="m136.317 16.864-12.495-12.55A14.731 14.731 0 0 0 113.427.015H53.892a14.779 14.779 0 0 0-10.395 4.297L31.002 16.864H.027v67.421h16.8c4.62 0 8.348-3.744 8.374-8.358h2.389L49.797 96.07c8.112 6.618 19.373 6.777 27.72 1.002 3.282 2.848 6.825 4.193 10.79 4.193 4.777 0 9.265-1.952 12.809-6.329a14.685 14.685 0 0 0 16.8-4.43l6.878-8.516c1.47-1.82 2.388-3.902 2.861-6.064h15.199c.026 4.614 3.78 8.358 8.373 8.358h16.8v-67.42h-31.71ZM12.627 75.848c-2.31 0-4.2-1.899-4.2-4.22 0-2.32 1.89-4.218 4.2-4.218 2.31 0 4.2 1.899 4.2 4.219a4.205 4.205 0 0 1-4.2 4.219Zm102.375-1.82-6.851 8.49a2.111 2.111 0 0 1-2.966.317l-6.274-5.115-7.875 9.624c-1.575 1.925-3.937 1.265-4.725.633l-9.66-8.306-4.095 5.062c-3.649 4.51-10.29 5.195-14.516 1.74L32.499 63.27h-7.272V29.494h11l16.195-16.242c.525-.211.972-.396 1.497-.607h14.883l-10.158 9.36c-7.718 7.094-8.164 19.064-1.155 26.71 3.885 4.272 16.065 10.864 26.643 1.161l2.153-1.978 28.402 23.15a2.16 2.16 0 0 1 .315 2.98Zm27.825-10.758h-18.165a14.7 14.7 0 0 0-2.021-2.03L95.682 39.25l3.282-3.006c1.706-1.582 1.837-4.245.262-5.959L96.365 27.2a4.206 4.206 0 0 0-5.933-.264l-14.49 13.342c-2.493 2.294-6.746 2.479-9.082 0-2.441-2.61-2.231-6.618.315-8.938l17.22-15.847a10.42 10.42 0 0 1 7.087-2.768l21.972-.053c.551 0 1.076.21 1.443.606l16.197 16.242h11.733v33.75Zm12.6 12.578c-2.31 0-4.2-1.899-4.2-4.22 0-2.32 1.89-4.218 4.2-4.218 2.31 0 4.2 1.899 4.2 4.219a4.205 4.205 0 0 1-4.2 4.219Z"/>
                </svg>
                <div class="text-white">
                    <h2 class="font-bold  text-2xl">Thank you</h2>
                    <p class="font-thin">Feel free to contact me.</p>
                </div>
            </div>
            <div class="shadow-lg rounded-lg w-2/3 relative bg-white z-10 p-4 -left-4">
                <form>
                    <div class="flex gap-2">
                        <div>
                            <label class="font-light text-sm text-gray-primary block" for="email">Email</label>
                            <input id="email" name="email" class="rounded bg-gray-light pl-2 py-1 pr-24" type="email" placeholder="example@gmail.com">
                        </div>
                        <div>
                            <label class="font-light text-sm text-gray-primary block" for="name">Name</label>
                            <input id="name" name="name" class="rounded w-full bg-gray-light pl-2 py-1 pr-24" type="text" placeholder="John Doe">
                        </div>
                    </div>
                    <div class="mt-4">
                        <label for="message" class="font-light text-sm text-gray-primary block">Message</label>
                        <textarea placeholder="Hey there !" class="rounded w-full bg-gray-light pl-2 py-1 pr-24" name="message" id="message" cols="30" rows="5"></textarea>
                    </div>
                    <div class="flex justify-end">
                        <button type="submit" class="text-white font-thin bg-gradient rounded px-4 py-2 ease-in-out duration-300 hover:scale-95 mt-4 flex items-center gap-2 justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                                <path fill="#fff" d="M21.024 3.592a1.002 1.002 0 0 0-.99-.08l-17 8a1 1 0 0 0 .027 1.822l5.4 2.363v6.722l5.836-4.168 4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.006 1.006 0 0 0-.436-.893Zm-2.466 14.34-5.27-2.306 3.173-6.207-7.65 4.25-2.931-1.283 13.47-6.34-.792 11.886Z"/>
                            </svg>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
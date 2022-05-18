<script setup lang="ts">

const props = defineProps({
    title: String,
})

</script>

<template>
    <div class="text-center text-blue-secondary text-4xl font-black">
        <h1>{{ props.title }}</h1>
    </div>
</template>
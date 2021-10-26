<template>
    <div class="shadow-md rounded-xl p-4 space-x-2 text-left divide-y">
        <h1>Trends</h1>
        <ul class="text-md pt-4 divide-y leading-10">
            <a href="#" class="flex">
                <SolidHashtagIcon class="w-4"/>
                <div>Trend</div>
            </a>
            <a href="#" class="flex">
                <SolidHashtagIcon class="w-4"/>
                <div>Trend</div>
            </a>
        </ul>
    </div>
</template>

<style lang="postcss" scoped>
    a {
        @apply hover:underline
    }
</style>
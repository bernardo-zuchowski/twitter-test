<template>
    <button
    class="px-2 flex"
    @click.prevent="$nuxt.$emit('reply-textarea')">
        <SolidReplyIcon class="w-4 h-4 mx-1"/>
        <div class="lg-max:hidden">Reply</div>
    </button>
</template>
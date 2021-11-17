<template>
    <div class="px-8 pt-2 pb-6 -mx-4 shadow-lg rounded-b-xl">
        <div v-for="reply in onlyThisReplies" :key="reply" class="shadow-inner bg-gray-100 px-3 py-2 rounded-xl divide-y divide-white">
            <div class="pb-1 flex flex-wrap">
                <img
                class="object-cover w-5 h-5 rounded-full mr-1 self-center flex-none"
                :src="reply.authorAvatar"
                :alt="reply.authorName + '\'s photo'"
                />
                <div class="text-xs text-gray-800 px-1 self-center">{{reply.authorName}}</div>
                <div class="text-xs text-gray-500 px-1 self-center">@{{reply.authorUser}}</div>
            </div>
            <div class="text-xs text-justify pt-1">{{reply.content}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        repliesIds: Array
    },
    computed: {
        replies() {
            return this.$store.state.replies
        }
    },
    mounted() {
        this.$store.dispatch('getReplies')
    },
    
    updated() {
        this.$store.dispatch('getReplies')
    },

    methods: {
        onlyThisReplies() {
            return this.replies.filter(reply => reply.id === this.repliesIds)
        }
    }
}
</script>
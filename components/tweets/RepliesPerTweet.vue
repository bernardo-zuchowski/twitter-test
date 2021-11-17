<template>
    <div>
        <div class="text-sm rounded-b-xl bg-gradient-to-t from-gray-100 via-gray-100 px-3 py-2 divide-y divide-gray-300">
            Replies
            <div v-for="reply in replies" :key="reply" class="px-3 py-2 divide-y divide-gray-200">
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

    methods: { // filtrar os replies do tweet
        onlyThisReplies() {
            return this.replies.filter(reply => reply.id === this.repliesIds)
        }
    }
}
</script>
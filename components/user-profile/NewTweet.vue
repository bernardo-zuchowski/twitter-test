<template>
    <form ref="newTweet" @submit.prevent="createTweet">
        <input
        class="mt-4 w-full shadow-inner rounded-full bg-gray-100 py-1 px-2 text-black"
        type="text"
        placeholder="Compose new tweet"
        v-model="text"
        >
    </form>
</template>

<script>
export default {
    props: {
        authorId: String,
    },
    data() {
        return {
            text: '',
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        async createTweet() {
            const requisition = await this.$axios.$post('tweets', {
                "tweet": {
                    "authorName": `${this.user.name}`,
                    "authorUser": `${this.user.username}`,
                    "authorAvatar": `${this.user.avatar}`,
                    "content": `${this.text}`,
                    "favorites": [],
                    "user": `${this.authorId}`,
                    "uuid": `${this.user.uuid}`,
                }
            })
            
            this.$store.commit('SET_TWEETS', requisition)

            this.$refs.newTweet.reset()
        },
    }
}
</script>

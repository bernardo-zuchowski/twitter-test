<template>
    <form ref="newTweet" @submit.prevent="createTweet">
        <textarea
        rows="2"
        class="lg-min:mt-6 lg-max:mt-4 resize-none w-full shadow-inner rounded-xl bg-gray-100 py-1 px-2 text-black"
        type="text"
        placeholder="Compose new tweet"
        v-model="text"
        />
    </form>
</template>

<script>
export default {
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
                    "user": `${this.user.id}`,
                    "uuid": `${this.user.uuid}`,
                }
            })
            
            this.$store.commit('SET_TWEETS', requisition)

            this.$refs.newTweet.reset()
        },
    }
}
</script>

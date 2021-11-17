<template>
    <button
    class="px-2 flex"
    type="submit"
    @click.prevent="retweet"
    >
        <SolidRefreshIcon class="w-4 h-4 mx-1"/>
        <div class="lg-max:hidden">Retweet</div>
    </button>
</template>

<script>
export default {
    props: {
        tweet: Object,
    },
    computed: {
		user() {
            return this.$store.state.user;
        },
    },
    methods: {
        async retweet() {
            const body = {
                "tweet": {
                    "authorName": `${this.user.name}`,
                    "authorUser": `${this.user.username}`,
                    "authorAvatar": `${this.user.avatar}`,
                    "content": null,
                    "favorites": [],
                    "userId": `${this.user.id}`,
                    "uuid": `${this.user.uuid}`,
                    "retweet": {
                        "authorName": `${this.tweet.authorName}`,
                        "authorUser": `${this.tweet.authorUser}`,
                        "authorAvatar": `${this.tweet.authorAvatar}`,
                        "content": `${this.tweet.content}`,
                        "tweetId": `${this.tweet.id}`,
                    }
                }
            }
            const requisition = await this.$axios.$post('tweets', body)
            this.$store.commit('SET_TWEETS', requisition)
        }
    },
}
</script>
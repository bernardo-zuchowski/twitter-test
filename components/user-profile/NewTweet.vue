<template>
    <form
    ref="newTweet"
    @keyup.shift.enter.prevent="createTweet"
    class="relative">
        <textarea
        rows="2"
        class="lg-min:mt-6 lg-max:mt-4 resize-none w-full shadow-inner rounded-xl bg-gray-100 py-1 px-2 text-black"
        type="text"
        placeholder="Compose new tweet"
        v-model="text"
        />
        <div class="text-xs absolute bottom-4 right-14 bg-gradient-to-t from-gray-50 to-gray-100 pr-3 pl-2">
            shift+enter or
        </div>
        <button
        @click.prevent="createTweet"
        class="absolute text-xs right-8 bottom-3 bg-gray-50 rounded-full shadow hover:shadow-inner hover:bg-gray-100">
            <SolidCheckIcon class="w-5 h-5 m-1"/>
        </button>
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

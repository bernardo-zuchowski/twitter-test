<template>
    <form ref="newTweet" @submit.prevent="createPost">
        <input
        class="mt-4 w-full shadow-inner rounded-full bg-gray-100 py-1 px-2 text-black"
        type="text"
        placeholder="Compose new Tweet"
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
        loggedUser() {
            return this.$store.state.loggedUser;
        },
    },
    methods: {
        createPost() {
            this.$axios.post('api/tweet', {
                "tweet": { // tornar dinânimico os dados de usuário
                    "authorId": this.authorId,
                    "uuid": this.loggedUser.uuid,
                    "name": this.loggedUser.name,
                    "username": this.loggedUser.username,
                    "avatar": this.loggedUser.avatar,
                    "content": this.text,
                }
            })
            .then(response => {
                this.$store.commit('SET_TWEETS', response.data)
            })
            this.$refs.newTweet.reset()
        },
    }
}
</script>

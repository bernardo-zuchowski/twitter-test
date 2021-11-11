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
    data() {
        return {
            text: '',
        }
    },
    methods: {
        createPost() {
            fetch('api/tweets', {
                method: 'post',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({
						tweet: { // tornar dinânimico os dados de usuário
                            name: 'John Roe',
                            username: 'johnroe',
                            image: 'https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg',
                            content: this.text,
                            reply: {},
                            favorite: {},
                        }
					})
            })
                .then(res => res.json())
                .then(json => console.log(json));
            this.$refs.newTweet.reset()
        },
    }
}
</script>

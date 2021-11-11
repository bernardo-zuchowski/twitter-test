<template>
    <form>
        <input
        class="mt-4 w-full shadow-inner rounded-lg bg-gray-100 py-1 px-2 text-black"
        type="text"
        placeholder="Compose new Tweet"
        >
    </form>
</template>

<script>
export default {
	data() {
		return {
			text: '',
			tweetCreated: {},
		};
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
				.then(({tweetCreated}) => {
					this.tweetCreated = tweetCreated;
				});
			this.$refs.newTweet.reset();
		},
	}
};
</script>

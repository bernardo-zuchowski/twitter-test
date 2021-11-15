<template>
    <button
    class="px-2 flex"
	type="submit"
	:class="{'text-yellow-500':favorited}"
    @click.prevent="favorite"
    >
        <SolidStarIcon class="w-4 h-4 mx-1"/>
        <div class="lg-max:hidden">Favorite</div>
    </button>
</template>

<script>
export default {
	props: {
		tweetId: String,
		tweetFavs: Array
	},

	data() {
		return {
			favorited: false
		}
	},

    computed: {
		user() {
            return this.$store.state.user;
        },
    },

	methods: {
		async favorite() {
			const body = this.favorited === false ? {
				'favorite': {
					'userId': `${this.user.id}`,
					'tweetId': `${this.tweetId}`
				}
			} : {
				'favorite': {
					'userId': null,
					'tweetId': null
				}
			}
			const requisition = this.favorited === false ? await this.$axios.post('favorites', body)
												   : await this.$axios.patch(`favorites/${this.tweetId}/tweets`, body)

			this.$store.commit('SET_FAVORITES', requisition)

			this.favorited = !this.favorited
		},
	}
};
</script>
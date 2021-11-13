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
		id: String
	},

	data() {
		return {
			favorited: false
		}
	},

    computed: {
        favorites() {
            return this.$store.state.favorites;
        },
		loggedUser() {
            return this.$store.state.loggedUser;
        },
    },

	methods: {
		favorite() {
			const favDataLength = this.$store.state.favorites.length;
			const favIdToDel = favDataLength < 2 ? 2 : favDataLength;
			const route = this.favorited === false ? 'favorites' : `tweets/${favIdToDel}/favorites`;
			const body = {
				'favorite': {
					'userId': this.loggedUser.id,
					'tweetId': this.id
				}
			}
			const requisition = (r, b) => (
				this.favorited === false ? this.$axios.post(r, b) : this.$axios.delete(r, b)
			)
			requisition(route, body)
			.then(response => {
                this.$store.commit('SET_TWEETS', response.data)
			});
			this.favorited = !this.favorited
		},
	}
};
</script>
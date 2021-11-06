<template>
    <button
    class="px-2 flex"
    :class="{'text-yellow-600':isFav}"
    @click="isFav = !isFav && addFav"
    >
        <SolidStarIcon class="w-4 h-4 mx-1"/>
        <div class="lg-max:hidden">Favorite</div>
    </button>
</template>

<script>
export default {
	props: {
		id: String,
		favorite: Number,
	},
	data() {
		return {
			tweet: [
				this.favorite,
			],
			isFav: false,
		};
	},
	methods: {
		addFav() {
			if (this.isFav === false) {
				return this.tweet.favorite++;
			} else {
				return this.tweet.favorite--;
			}
		}
	},
	updated() {
		fetch('api/tweets/' + `${this.id}`, {
			method: 'patch',
			headers: {'content-type': 'application/json'},
		})
			.then(res => res.json())
			.then(({favorite}) => {
				this.addFav = favorite;
			});
	}
};
</script>
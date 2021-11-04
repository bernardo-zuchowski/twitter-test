<template>
    <button
    class="px-2 flex"
    :class="{'text-yellow-600':isFav}"
    @click="isFav = !isFav && addFav"
    >
        <SolidStarIcon class="w-4 h-4 mx-1"/>
        <div>Favorite</div>
    </button>
</template>

<script>
export default {
	props: {
		id: String,
	},
	data() {
		return {
			tweet: [],
			isFav: false,
		};
	},
	methods: {
		addFav() {
			if (this.isFav === false) {
				return this.$emit.favorite++;
			} else {
				return this.$emit.favorite--;
			}
		}
	},
	updated() {
		fetch('api/tweets/' + `${this.id}`, {
			method: 'patch',
			headers: {'content-type': 'application/json'},
		})
			.then(res => res.json())
			.then(({tweet}) => {
				this.addFav = tweet;
			});
	}
};
</script>
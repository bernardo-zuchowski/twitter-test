<template>
    <button
    class="px-2 flex"
	type="submit"
	:class="{'text-yellow-500':favorited}"
    @click="favorite"
    >
        <SolidStarIcon class="w-4 h-4 mx-1"/>
        <div class="lg-max:hidden">Favorite</div>
    </button>
</template>

<script>
export default {
	props: {
		id: String,
		uuid: String,
	},
	data() {
		return {
			favorited: false
		}
	},
	methods: {
		favorite() {
			let route = this.favorited === false ? 'api/favorites' : `api/favorites/${this.id}`
			let requisition = this.favorited === false ? "post" : "delete"
			const options = {
				method: patch,
				headers: {'content-type': 'application/json'},
				body: JSON.stringify({
					"favorite": {
						"tweetId": "1", //tornar dinamico
						"userId": "5", //tornar dinamico
					}
				})
			};


			fetch(`api/favorites`, options)
			.then(res => res.json())
			.then(json => console.log(json));
			this.favorited = true;
		}
	}
};
</script>
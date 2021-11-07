<template>
    <button
    class="px-2 flex"
	type="submit"
	:class="{'text-yellow-500':favorited}"
    @click="isFav"
    >
        <SolidStarIcon class="w-4 h-4 mx-1"/>
        <div class="lg-max:hidden">Favorite</div>
    </button>
</template>

<script>
export default {
	props: {
		id: String,
		favorite: Object,
	},
	data() {
		if (typeof this.favorite.johnroe === "boolean") {
			return {
				favorited: Object.values(this.favorite.johnroe) //trocar johnroe por usuário logado tornando dinamico
			} 
		} else {
			return {
				favorited: false
			}
		}
	},
	methods: {
		isFav() {
			if (this.favorited === false) {
				fetch('api/tweets/' + `${this.id}`, {
					method: 'patch',
					headers: {'content-type': 'application/json'},
					body: JSON.stringify({
						tweet: {
							favorite: {
								'johnroe': true //trocar johnroe por usuário logado tornando dinamico
							}
						}
					})
				})
					.then(res => res.json())
					.then(json => console.log(json));
				this.favorited = true;
				return this.favorited
			} else {
				fetch('api/tweets/' + `${this.id}`, {
					method: 'patch',
					headers: {'content-type': 'application/json'},
					body: JSON.stringify({
						tweet: {
							favorite: {
								'johnroe': false, //trocar johnroe por usuário logado tornando dinamico
							}
						}
					})
				})
					.then(res => res.json())
					.then(json => console.log(json));
				this.favorited = false;
				return this.favorited
			}
		}
	}
};
</script>
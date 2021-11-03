<template>
    <div class="flex justify-between text-xs pt-4">
        <div>
            <div>Expand</div>
        </div>
        <div class="flex">
            <button class="px-2 flex">
                <SolidReplyIcon class="w-4 h-4 mx-1"/>
                <div>Reply</div>
            </button>
            <button class="px-2 flex">
                <SolidRefreshIcon class="w-4 h-4 mx-1"/>
                <div>Retweet</div>
            </button>
            <button
            class="px-2 flex"
            :class="{'text-yellow-600':isFav}"
            @click="isFav = !isFav && addFav"
            >
                <SolidStarIcon class="w-4 h-4 mx-1"/>
                <div>Favorite</div>
            </button>
            <button class="px-2 flex">
                <SolidDotsHorizontalIcon class="w-4 h-4 mx-1"/>
                <div>More</div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			tweet: [],
			isFav: false,
		};
	},
	methods: {
		addFav() {
			this.tweet.favorite++;
		}
	},
	updated() {
		fetch('api/tweets/:id', {
			method: 'patch',
			headers: {'content-type': 'application/json'},
		})
			.then(res => res.json())
			.then(({addFav}) => {
				this.tweet.favorite = addFav();
			});
	}
};
</script>
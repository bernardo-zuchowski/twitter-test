<template>
    <div class="flex-inline divide-y">
        <div v-for="tweet in tweets" :key="`tweet-${tweet.id}`" class="py-2">
            <div class="flex">
                <div class="pr-1 flex-none">
                    <img
                    class="object-cover w-24 h-24 rounded-xl border-4 border-white border-solid"
                    :src="tweet.image"
                    :alt="tweet.name"
                    />
                </div>
                <div class="w-full pl-1">
                    <div class="grid grid-cols-2 gap-2 text-left">
                        <h3>{{tweet.name}}</h3>
                        <div>@{{tweet.username}}</div>
                    </div>
                    <div class="text-justify pt-2">
                        {{tweet.content}}
                    </div>
                </div>
            </div>
            <TweetsInteractions/>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			tweets: [],
		};
	},

	mounted() {
		fetch('api/tweets')
			.then(res => res.json())
			.then(({ tweets }) => {
				this.tweets = tweets;
			});
	},
};
</script>
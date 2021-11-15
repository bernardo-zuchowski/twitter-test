<template>
    <div class="h-full shadow-md rounded-b-3xl divide-y p-4 lg-max:-mt-14 ">
        <h1 class="lg-max:pt-6">Tweets</h1>
        <div class="divide-y pt-4">
            <div v-for="tweet in tweets" :key="`${tweet.id}`" class="py-2">
                <div class="flex">
                    <div class="pr-1 flex-none -mr-1">
                        <img
                        class="object-cover w-24 h-24 rounded-full border border-gray-200 p-1"
                        :src="tweet.authorAvatar"
                        :alt="tweet.authorName + '\'s photo'"
                        />
                    </div>
                    <div class="w-full divide-y divide-gray-200">
                        <div class="xl-min:grid xl-min:grid-cols-7 xl-min:gap-2 text-left pb-1">
                            <h3 class="xl-min:col-start-1 xl-min:col-span-3 pl-2">{{tweet.authorName}}</h3>
                            <div class="xl-min:col-start-4 xl-min:col-span-4 pl-2">@{{tweet.authorUser}}</div>
                        </div>
                        <div class="text-justify pt-1 pl-2">
                            {{tweet.content}}
                        </div>
                    </div>
                </div>
                <div class="flex justify-between text-xs pt-4">
                    <div>
                        <SolidArrowsExpandIcon class="sm-min:hidden h-4 w-4"/>
                        <div class="sm-max:hidden">Expand</div>
                    </div>
                    <div class="flex">
                        <InteractionsReply/>
                        <InteractionsRetweet/>
                        <InteractionsFavorite :tweetId="tweet.id" :tweetFavs="tweet.favorite"/>
                        <InteractionsMore/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        tweets() {
            return this.$store.state.tweets;
        }
    },

	mounted() {
		this.$store.dispatch('getTweets')
	},
};
</script>
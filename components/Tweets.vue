<template>
    <div class="h-full shadow-md rounded-b-3xl divide-y p-4 lg-max:-mt-14 ">
        <h1 class="lg-max:pt-6">Tweets</h1>
        <div class="divide-y pt-4">
            <div v-for="tweet in tweets" :key="`${tweet.id}`" class="pt-4">
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

                        <div v-if="tweet.content !== null" class="text-justify pt-1 pl-2">
                            {{tweet.content}}
                        </div>

                        <div v-else
                        class="bg-gray-100 rounded-xl m-2 px-2 pt-2 pb-1 divide-y divide-white shadow-inner">
                            <div class="pb-2 flex flex-wrap">
                                <img
                                class="object-cover w-5 h-5 rounded-full mr-1 self-center flex-none"
                                :src="tweet.retweet.authorAvatar"
                                :alt="tweet.retweet.authorName + '\'s photo'"
                                />
                                <div class="text-xs text-gray-800 px-1 self-center flex-1">{{tweet.retweet.authorName}}</div>
                                <div class="text-xs text-gray-500 px-1 self-center flex-1">@{{tweet.retweet.authorUser}}</div>
                            </div>
                            <div class="text-justify pt-1">{{tweet.retweet.content}}</div>
                        </div>

                    </div>
                </div>
                <Interactions :tweetObj="tweet"/>
                <div v-if="tweet.replies.length > 0">
                    <RepliesPerTweet class="px-8 pt-2 pb-6 -mx-4 shadow-lg rounded-b-3xl" :repliesIds="tweet.replies"/>
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
        },
    },

	mounted() {
		this.$store.dispatch('getTweets')
	},
    updated() {
        this.$store.dispatch('getTweets')
    },
};
</script>
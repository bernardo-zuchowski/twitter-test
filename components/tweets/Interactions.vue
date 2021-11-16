<template>
    <div>
        <div class="flex justify-between text-xs pt-4 pb-4">
            <div>
                <SolidArrowsExpandIcon class="sm-min:hidden h-4 w-4"/>
                <div class="sm-max:hidden">Expand</div>
            </div>
            <div class="flex">
                <InteractionsReply/>
                <InteractionsRetweet :tweet="tweet"/>
                <InteractionsFavorite :tweetId="tweet.id"/>
                <InteractionsMore/>
            </div>
        </div>
        <form :key="`${tweet.id}`">
            <textarea class="w-full resize-none rounded-xl p-2 text-xs border border-gray-200" :class="{'hidden':replyHide, 'block':replyShow}" rows="3"></textarea>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        tweetObj: Object
    },
    data() {
        return {
            tweet: this.tweetObj,
            replyShow: false,
            replyHide: true,
        }
    },
    created() {
        this.$nuxt.$on('reply-textarea', () => {
            this.replyShow = !this.replyShow
            this.replyHide = !this.replyHide
        })
    },
}
</script>
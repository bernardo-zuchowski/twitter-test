<template>
    <div>
        <div class="flex justify-between text-xs pt-4 pb-4">
            <div>
                <SolidArrowsExpandIcon class="sm-min:hidden h-4 w-4"/>
                <div class="sm-max:hidden">Expand</div>
            </div>
            <div class="flex">
                <button @click.prevent="showHide" class="px-2 flex">
                    <SolidReplyIcon class="w-4 h-4 mx-1"/>
                    <div class="lg-max:hidden">Reply</div>
                </button>
                <InteractionsRetweet :tweet="tweet"/>
                <InteractionsFavorite :tweetId="tweet.id"/>
                <InteractionsMore/>
            </div>
        </div>
        <form
        @keyup.shift.enter.prevent="createReply"
        ref="newReply"
        class="relative px-4"
        :class="{'hidden':textareaHide, 'block':textareaShow}"
        >
            <textarea
            class="w-full resize-none rounded-xl p-2 mb-4 text-xs border border-gray-200"
            placeholder="Reply this tweet"
            v-model="text"
            rows="2"/>
            <div class="text-xs absolute right-20 bottom-4 bg-gradient-to-t from-gray-50 to-white px-2">shift+enter or </div>
            <button
            class="absolute text-xs right-12 bottom-3 bg-white rounded-full shadow hover:shadow-inner hover:bg-gray-100">
                <SolidCheckIcon class="w-5 h-5 m-1"/>
            </button>
            <button
            class="absolute text-xs right-1 bottom-3 bg-white rounded-full shadow hover:shadow-inner hover:bg-gray-100"
            @click.prevent="showHide">
                <SolidXIcon class="w-5 h-5 m-1"/>
            </button>
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
            textareaShow: false,
            textareaHide: true,
            text: ''
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        showHide() {
            this.textareaShow = !this.textareaShow;
            this.textareaHide = !this.textareaHide;
        },

        async createReply() {
            const body = {
                "reply": {
                    "userId": `${this.user.id}`,
                    "tweetId": `${this.tweet.id}`,
                    "authorName": `${this.user.name}`,
                    "authorUser": `${this.user.username}`,
                    "authorAvatar": `${this.user.avatar}`,
                    "content": `${this.text}`,
                }
            };
            const requisition = await this.$axios.$post(`replies`, body);
            this.$store.commit('SET_REPLIES', requisition);
            
            this.$refs.newReply.reset();
            this.textareaShow = !this.textareaShow;
            this.textareaHide = !this.textareaHide;
        }
    },
}
</script>
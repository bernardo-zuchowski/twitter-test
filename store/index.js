export const state = () => ({
    user: [],
    users: [],
    tweets: [],
    favorites: [],
    replies: []
})

export const mutations =  {
    SET_LOGGED_USER(state, user) {
        state.user = user
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_TWEETS(state, tweets) {
        state.tweets = tweets
    },
    SET_FAVORITES(state, favorites) {
        state.favorites = favorites
    },
    SET_REPLIES(state, replies) {
        state.replies = replies
    },
}

export const actions =  {
    async getLoggedUser({ commit }) {
        const route = await this.$axios.get('users/1')
        commit('SET_LOGGED_USER', route.data.user)
    },
    async getUsers({ commit }) {
        const route = await this.$axios.get('users')
        commit('SET_USERS', route.data.users)
    },
    async getTweets({ commit }) {
        const route = await this.$axios.get('tweets')
        commit('SET_TWEETS', route.data.tweets.reverse())
    },
    async getReplies({ commit }) {
        const route = await this.$axios.get('replies')
        commit('SET_REPLIES', route.data.replies.reverse())
    },
}
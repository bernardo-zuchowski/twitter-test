export const state = () => ({
    user: [],
    users: [],
    tweets: [],
    favorites: []
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
}
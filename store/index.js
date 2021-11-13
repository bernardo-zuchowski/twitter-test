export const state = () => ({
    loggedUser: [],
    users: [],
    tweets: [],
    favorites: [],
})

export const mutations =  {
    SET_LOGGED_USER(state, loggedUser) {
        state.loggedUser = loggedUser
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
        await this.$axios.get('users/1')
        .then(response => {
            commit('SET_LOGGED_USER', response.data)
        })
    },
    async getUsers({ commit }) {
        await this.$axios.get('users')
        .then(response => {
            commit('SET_USERS', response.data)
        })
    },
    async getTweets({ commit }) {
        await this.$axios.get('tweets')
        .then(response => {
            commit('SET_TWEETS', response.data)
        })
    },
}
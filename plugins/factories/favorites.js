import { Factory } from "miragejs";

export default {
    favorites: Factory.extend({
        authorId() {
            return String
        },
        tweetId() {
            return String
        },
    })
}
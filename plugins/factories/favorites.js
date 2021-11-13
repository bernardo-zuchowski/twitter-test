import { Factory, association } from "miragejs";

export default {
    favorites: Factory.extend({
        authorId() {
            return []
        },
        tweetId() {
            return []
        }
    })
}
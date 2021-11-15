import { Factory, association } from "miragejs";

export default {
    favorites: Factory.extend({
        authorId() {
            return null;
        },
        tweetId() {
            return null;
        }
    })
}
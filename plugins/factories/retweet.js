import { Factory } from "miragejs";
import tweet from "./tweet";

export default {
    retweet: Factory.extend({
		authorId() {
			return user
		},
        tweet() {
            return tweet
        },
		replys() {
			return {};
		},
		favorites() {
			return {};
		}
	})
}
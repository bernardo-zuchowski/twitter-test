import { Factory, association } from 'miragejs';
import faker from 'faker';

export default {
	tweet: Factory.extend({
		user: association(),
		
		afterCreate(tweet, server) {
			let authorName = tweet.user.name;
			let authorUser = tweet.user.username;
			let authorAvatar = tweet.user.avatar;
			tweet.update({authorName})
			tweet.update({authorUser})
			tweet.update({authorAvatar})
		},
		content() {
			return faker.lorem.sentences(2);
		},
		uuid() {
			return faker.datatype.uuid();
		},
	}),
};

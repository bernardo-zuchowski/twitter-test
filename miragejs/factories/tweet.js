import { Factory } from 'miragejs';
import faker from 'faker';

export default {
	tweet: Factory.extend({
		name() {
			return faker.fake('{{name.firstName}}' + ' ' + '{{name.lastName}}');
		},
		username() {
			return this.name.replace(' ', '.').toLowerCase();
		},
		image() {
			return faker.fake('{{image.avatar}}');
		},
		content() {
			return faker.lorem.sentences(2);
		},
		reply() {
			return [];
		},
		favorite() {
			return faker.datatype.number();
		},
	}),
};

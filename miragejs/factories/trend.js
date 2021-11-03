import { Factory } from 'miragejs';
import faker from 'faker';

export default {
	trend: Factory.extend({
		word() {
			return faker.lorem.word();
		},
	}),
};
import { Factory } from 'miragejs';
import faker from 'faker';

export default {
	follow: Factory.extend({
		name() {
			return faker.fake('{{name.firstName}}' + ' ' + '{{name.lastName}}');
		},
		username() {
			return this.name.replace(' ', '.').toLowerCase();
		},
		avatar() {
			return faker.fake('{{image.avatar}}');
		},
	}),
};
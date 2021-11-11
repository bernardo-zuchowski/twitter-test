import { Factory, trait } from "miragejs"
import faker from 'faker'

export default {
    user: Factory.extend({
        uuid() {
            return faker.datatype.uuid()
        },
        name() {
			return faker.fake('{{name.firstName}}' + ' ' + '{{name.lastName}}');
		},
        username() {
			return this.name.replace(' ', '_').toLowerCase() + faker.datatype.number(99);
		},
		avatar() {
			return faker.image.avatar();
		},
        banner() {
            return 'https://www.teclasap.com.br/wp-content/uploads/2008/11/sky-x-heaven.jpg';
        }
    })
}
import { Factory } from 'miragejs';
import faker from 'faker';

export default {
  user: Factory.extend({
    name() {
      return faker.fake('{{name.firstName}}' + ' ' + '{{name.lastName}}');
    },
    username() {
      return this.name.replace(' ', '').toLowerCase();
    },
    image() {
      return faker.fake('{{image.avatar}}');
    },
    content() {
      return faker.fake('{{lorem.paragraph}}');
    },
    reply() {
      return false;
    },
    favorite() {
      return false;
    },
  }),
};

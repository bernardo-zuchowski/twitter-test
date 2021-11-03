import { Model, hasMany, belongsTo } from 'miragejs';

export default {
  tweet: Model.extend({
    messages: hasMany(),
  }),
  messages: Model.extend({
    tweet: belongsTo(),
  }),
};

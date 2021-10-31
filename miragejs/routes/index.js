export default function routes() {
  this.namespace = 'api';

  this.get('users');

  this.patch("/users/:id");
}

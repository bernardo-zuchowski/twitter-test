export default function routes() {
  this.namespace = 'api';

  this.get('tweets');

  this.patch("/tweets/:id");
}

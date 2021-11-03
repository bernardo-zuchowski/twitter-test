export default function routes() {
	this.namespace = 'api';

	this.get('tweets');
	this.get('trends');
	this.get('follows');

	this.patch('/tweets/:id');
}

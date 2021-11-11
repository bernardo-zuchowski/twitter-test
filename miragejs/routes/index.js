export default function routes() {
	this.namespace = 'api';

	this.get('tweets');
	this.get('trends');
	this.get('follows');

	this.post('tweets')
	this.patch('tweets/:id');
}

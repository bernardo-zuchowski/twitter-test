import { Server, Model, RestSerializer, belongsTo, hasMany, JSONAPISerializer } from "miragejs"
import factories from './factories';

const config = environment => {
	const config = {
		environment,
		factories,
		models: {
			user: Model.extend({
				tweet: hasMany(),
              	favorites: hasMany(),
			}),
			tweet: Model.extend({
				user: belongsTo(),
              	favorites: hasMany(),
			}),
			favorite: Model.extend({
            	user: belongsTo(),
              	tweet: belongsTo(),
            }),
		},
		routes() {
			this.namespace = 'api';
			this.urlPrefix = 'https://localhost:3000'
		
			this.get('users');
			this.get('users/:id');
			this.get('tweets');
      
			this.post('favorites');
			this.post('tweets');
			this.patch('favorites/:id/tweets');
		},
		seeds(server) {
			server.createList('user', 4)
      		server.createList('tweet', 5)
		},
		serializers: {
			application: RestSerializer,
		}
	};

	return config;
};

function makeServer({ environment = 'development' } = {}) {
	return new Server(config(environment));
}

if (process.env.NODE_ENV === 'development') {
  makeServer();
}
import { Server } from 'miragejs';
import factories from './factories';
import routes from './routes';
import models from './models';
import seeds from './seeds';
import serializers from './serializers';

const config = environment => {
	const config = {
		environment,
		factories,
		models,
		routes,
		seeds,
		serializers
	};

	return config;
};

export function makeServer({ environment = 'development' } = {}) {
	return new Server(config(environment));
}

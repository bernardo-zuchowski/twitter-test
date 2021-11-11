import favorites from './favorites';
import retweet from './retweet';
import tweet from './tweet';
import user from './user';

export default {
	...user,
	...tweet,
	...retweet,
	...favorites
};

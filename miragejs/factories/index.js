import follow from './follow';
import trend from './trend';
import tweet from './tweet';

export default {
	...tweet,
	...trend,
	...follow,
};

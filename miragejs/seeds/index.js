const tweetsSeeder = server => {
	server.createList('tweet', 5);
};
const trendsSeeder = server => {
	server.createList('trend', 5);
};
const followsSeeder = server => {
	server.createList('follow', 3);
};

export default function seeds(server) {
	tweetsSeeder(server);
	trendsSeeder(server);
	followsSeeder(server);
}

const usersSeeder = server => {
  server.createList('tweet', 5);
};

export default function seeds(server) {
  usersSeeder(server);
}

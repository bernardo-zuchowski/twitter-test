const usersSeeder = server => {
  server.createList('user', 5);
};

export default function seeds(server) {
  usersSeeder(server);
}

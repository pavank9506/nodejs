let server;

beforeAll((done) => {
  // Start your Node.js server before running integration tests
  const app = require('./server'); // Update with your actual entry file
  server = app.listen(3000, () => {
    console.log('Test server running on port 3000');
    done();
  });
});

afterAll((done) => {
  if (server) {
    server.close(done);
  } else {
    done();
  }
});
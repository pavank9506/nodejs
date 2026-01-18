// Jest setup file
console.log('Jest setup initialized');

let server;

beforeAll((done) => {
  // Start your Node.js server before running integration tests
  const app = require('./app'); // or require('./server') depending on your entry file
  server = app.listen(3000, () => {
    console.log('Test server running on port 3000');
    done();
  });
});

afterAll((done) => {
  // Close the server after tests complete
  server.close(done);
});
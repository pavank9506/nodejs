describe('API Integration Tests', () => {
  test('should return a successful response', async () => {
    const response = await fetch('http://localhost:3000/api/health');
    expect(response.status).toBe(200);
  }, 10000);

  test('should fetch user data', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
  }, 10000);
});
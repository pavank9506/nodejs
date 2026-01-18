describe('Unit Tests', () => {
  test('should pass a basic test', () => {
    expect(1 + 1).toBe(2);
  });

  test('should verify string concatenation', () => {
    const result = 'Hello' + ' ' + 'World';
    expect(result).toBe('Hello World');
  });

  test('should verify array operations', () => {
    const arr = [1, 2, 3];
    expect(arr.length).toBe(3);
    expect(arr[0]).toBe(1);
  });
});
const axios = require('axios');

test('Get nonexistent route', async () => {
  try {
    await axios.get('https://swapi.dev/api/nonexistent/');
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});

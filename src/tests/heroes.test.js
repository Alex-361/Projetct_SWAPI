const axios = require('axios');

test('Get heroes data', async () => {
  try {
    await axios.get('https://swapi.dev/api/heroes/');
  } catch (error) {
    expect(error.response.status).toBe(404);
  }
});

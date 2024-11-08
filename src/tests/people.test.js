const axios = require('axios');

test('Get people data', async () => {
  const response = await axios.get('https://swapi.dev/api/people/1/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBeDefined();
});

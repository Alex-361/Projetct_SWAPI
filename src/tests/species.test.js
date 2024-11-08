const axios = require('axios');

test('Get species data', async () => {
  const response = await axios.get('https://swapi.dev/api/species/1/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBeDefined();
});

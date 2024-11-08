const axios = require('axios');

test('Get vehicles data', async () => {
  const response = await axios.get('https://swapi.dev/api/vehicles/4/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBeDefined();
});

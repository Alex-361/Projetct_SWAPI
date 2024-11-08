const axios = require('axios');

test('Deve retornar dados da nave Millennium Falcon', async () => {
  const response = await axios.get('https://swapi.dev/api/starships/10/');
  expect(response.status).toBe(200);
  expect(response.data.name).toBe('Millennium Falcon');
});

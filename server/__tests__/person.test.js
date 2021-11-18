const axios = require('axios');

describe('single person resolvers', () => {
  it('should return a Person', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
         query {
           getPersonById(id: 1) {
            name
            height
            mass
            gender
            url
            homeworld {
              name
            }
          }
        }
      `,
    });

    expect(response.data.data.getPersonById).toMatchObject({
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      gender: 'male',
      url: 'https://swapi.dev/api/people/1/',
      homeworld: {
        name: 'Tatooine',
      },
    });
  });
});

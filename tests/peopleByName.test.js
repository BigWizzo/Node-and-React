const axios = require('axios');

describe('poeple by name resolver', () => {
  it('should return a person with name Anakin', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
    query {
      getPeopleByName(name: "Anakin") {
        previous
        next
        results {
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
    }
  `,
    });

    expect(response.data.data.getPeopleByName).toMatchObject({
      previous: null,
      next: null,
      results: [
        {
          name: 'Anakin Skywalker',
          height: '188',
          mass: '84',
          gender: 'male',
          url: 'https://swapi.dev/api/people/11/',
          homeworld: {
            name: 'Tatooine',
          },
        },
      ],
    });
  });
});

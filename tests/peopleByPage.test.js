const axios = require('axios');

describe('poeple by page resolver', () => {
  it('should return second page of all people', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
    query {
      getAllPeoplePage(page: 2) {
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

    expect(response.data.data.getAllPeoplePage.next).toBe(
      'https://swapi.dev/api/people/?page=3'
    );
    expect(response.data.data.getAllPeoplePage.previous).toBe(
      'https://swapi.dev/api/people/?page=1'
    );
  });
});

const axios = require('axios');

describe('all people resolver', () => {
  it('should return first page of all people', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
        query {
          getAllPeople {
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

    expect(response.data.data.getAllPeople.next).toBe(
      'https://swapi.dev/api/people/?page=2'
    );
    expect(response.data.data.getAllPeople.previous).toBe(null);
  });
});

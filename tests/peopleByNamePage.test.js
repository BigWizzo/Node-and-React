const axios = require('axios');

describe('poeple by name page resolver', () => {
  it('should return search pages for person name with leters An', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
    query {
      getPeopleByNamePage(name: "An", page: 2) {
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

    expect(response.data.data.getPeopleByNamePage.next).toBe(null);
    expect(response.data.data.getPeopleByNamePage.previous).toBe(
      'https://swapi.dev/api/people/?search=An&page=1'
    );
  });
});

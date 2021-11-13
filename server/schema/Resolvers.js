const { requests } = require('../services/requests');

const resolvers = {
  Query: {
    getAllPeople: requests.getAllPeople,
    getPeopleByName: requests.getPeopleByName,
    getPersonById: requests.getPersonById,
    getAllPeoplePage: requests.getAllPeoplePage,
    getPeopleByNamePage: requests.getPeopleByNamePage,
  },

  Person: {
    homeworld: requests.getHomeworld,
  },

  People: {
    results: requests.getResults,
  },
};

module.exports = { resolvers };

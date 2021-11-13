const axios = require('axios');

const baseURL = 'https://swapi.dev/api/people/';

const resolvers = {
  Query: {
    getAllPeople: async () => {
      return axios.get(baseURL).then((res) => res.data);
    },

    getPeopleByName: async (_, { name }, { Person }) => {
      return axios.get(baseURL + `?search=${name}`).then((res) => res.data);
    },
    getPersonById: async (_, { id }) => {
      return axios.get(baseURL + `${id}`).then((res) => res.data);
    },

    getAllPeoplePage: async (_, { id }) => {
      return axios.get(baseURL + `?page=${id}`).then((res) => res.data);
    },

    getPeopleByNamePage: async (_, { name, id }) => {
      return axios
        .get(baseURL + `?search=${name}&page=${id}`)
        .then((res) => res.data);
    },
  },

  Person: {
    homeworld: async (parent) => {
      return axios.get(parent.homeworld).then((res) => res.data);
    },
  },

  People: {
    results: async (parent) => {
      return parent.results.map((person) => {
        return axios.get(person.url).then((res) => res.data);
      });
    },
  },
};

module.exports = { resolvers };

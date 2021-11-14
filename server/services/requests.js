const axios = require('axios');

const baseURL = 'https://swapi.dev/api/people/';

const requests = {
  getAllPeople: async () => {
    return axios.get(baseURL).then((res) => res.data);
  },

  getPeopleByName: async (_, { name }) => {
    return axios.get(baseURL + `?search=${name}`).then((res) => res.data);
  },
  getPersonById: async (_, { id }) => {
    return axios.get(baseURL + `${id}`).then((res) => res.data);
  },

  getAllPeoplePage: async (_, { page }) => {
    return axios.get(baseURL + `?page=${page}`).then((res) => res.data);
  },

  getPeopleByNamePage: async (_, { name, page }) => {
    return axios
      .get(baseURL + `?search=${name}&page=${page}`)
      .then((res) => res.data);
  },

  getHomeworld: async (parent) => {
    return axios.get(parent.homeworld).then((res) => res.data);
  },

  getResults: async (parent) => {
    return parent.results.map((person) => {
      return axios.get(person.url).then((res) => res.data);
    });
  },
};

module.exports = { requests };

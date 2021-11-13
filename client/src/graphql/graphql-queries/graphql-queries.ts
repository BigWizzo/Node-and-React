import { gql } from '@apollo/client';

const person = `{
      name
      height
      mass
      gender
      homeworld {
        name
      }
    }
`;

const people = `{
      previous
      next
      results ${person}
}`;

export const GET_ALL_PEOPLE = gql`
  query Query {
    getAllPeople {
      previous
      next
      results {
        name
        height
        mass
        gender
        homeworld {
          name
        }
      }
    }
  }
`;

export const GET_PEOPLE_BY_PAGE = gql`
  query GetAllPeoplePage($id: Int!) {
    getAllPeoplePage(id: $id) {
      previous
      next
      results {
        name
        height
        mass
        gender
        homeworld {
          name
        }
      }
    }
  }
`;

export const GET_PEOPLE_BY_NAME = gql`
  query GetPeopleByName($name: String!) {
    getPeopleByName(name: $name) {
      previous
      next
      results {
        name
        height
        mass
        gender
        homeworld {
          name
        }
      }
    }
  }
`;

export const GET_PEOPLE_BY_NAME_PAGE = gql`
  query GetPeopleByNamePage($name: String!, $id: Int!) {
    getPeopleByNamePage(name: $name, id: $id) {
      previous
      next
      results {
        name
        height
        mass
        gender
        homeworld {
          name
        }
      }
    }
  }
`;

export const GET_PERSON_BY_ID = gql`
  query GetPersonById($id: Int!) {
    getPersonById(id: $id) {
      name
      height
      mass
      gender
      homeworld {
        name
      }
    }
  }
`;

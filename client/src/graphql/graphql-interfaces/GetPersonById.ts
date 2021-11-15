/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetPersonById
// ====================================================


export interface GetPersonById_getPersonById_homeworld {
  __typename: "Planet";
  name: string;
}

export interface GetPersonById_getPersonById {
  __typename: "Person";
  name: string;
  height: string;
  mass: string;
  gender: string;
  url: string;
  homeworld: GetPersonById_getPersonById_homeworld;
}

export interface GetPersonById {
  getPersonById: GetPersonById_getPersonById;
}

export interface GetPersonByIdVariables {
  id: number;
}

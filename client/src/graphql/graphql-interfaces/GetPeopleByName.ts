/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetPeopleByName
// ====================================================


export interface GetPeopleByName_getPeopleByName_results_homeworld {
  __typename: "Planet";
  name: string;
}

export interface GetPeopleByName_getPeopleByName_results {
  __typename: "Person";
  name: string;
  height: string;
  mass: string;
  gender: string;
  url: string;
  homeworld: GetPeopleByName_getPeopleByName_results_homeworld;
}

export interface GetPeopleByName_getPeopleByName {
  __typename: "People";
  previous: string | null;
  next: string | null;
  results: GetPeopleByName_getPeopleByName_results[];
}

export interface GetPeopleByName {
  getPeopleByName: GetPeopleByName_getPeopleByName;
}

export interface GetPeopleByNameVariables {
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetPeopleByNamePage
// ====================================================


export interface GetPeopleByNamePage_getPeopleByNamePage_results_homeworld {
  __typename: "Planet";
  name: string;
}

export interface GetPeopleByNamePage_getPeopleByNamePage_results {
  __typename: "Person";
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: GetPeopleByNamePage_getPeopleByNamePage_results_homeworld;
}

export interface GetPeopleByNamePage_getPeopleByNamePage {
  __typename: "People";
  previous: string | null;
  next: string | null;
  results: GetPeopleByNamePage_getPeopleByNamePage_results[];
}

export interface GetPeopleByNamePage {
  getPeopleByNamePage: GetPeopleByNamePage_getPeopleByNamePage;
}

export interface GetPeopleByNamePageVariables {
  name: string;
  page: number;
}

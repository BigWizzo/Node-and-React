/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: GetAllPeoplePage
// ====================================================


export interface GetAllPeoplePage_getAllPeoplePage_results_homeworld {
  __typename: "Planet";
  name: string;
}

export interface GetAllPeoplePage_getAllPeoplePage_results {
  __typename: "Person";
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: GetAllPeoplePage_getAllPeoplePage_results_homeworld;
}

export interface GetAllPeoplePage_getAllPeoplePage {
  __typename: "People";
  previous: string | null;
  next: string | null;
  results: GetAllPeoplePage_getAllPeoplePage_results[];
}

export interface GetAllPeoplePage {
  getAllPeoplePage: GetAllPeoplePage_getAllPeoplePage;
}

export interface GetAllPeoplePageVariables {
  page: number;
}

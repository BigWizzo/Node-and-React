/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: Query
// ====================================================


export interface Query_getAllPeople_results_homeworld {
  __typename: "Planet";
  name: string;
}

export interface Query_getAllPeople_results {
  __typename: "Person";
  name: string;
  height: string;
  mass: string;
  gender: string;
  url: string;
  homeworld: Query_getAllPeople_results_homeworld;
}

export interface Query_getAllPeople {
  __typename: "People";
  previous: string | null;
  next: string | null;
  results: Query_getAllPeople_results[];
}

export interface Query {
  getAllPeople: Query_getAllPeople;
}

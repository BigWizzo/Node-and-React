import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../../graphql/graphql-queries/graphql-queries';
import SearchForm from '../../form/SearchForm';
import PeoplePagination from '../../pages/pages-id/pages-id';
import NamePagination from '../../pages/pages-name-id/PageNameAndId';

function AllPeople() {
  const { error, loading, data } = useQuery(GET_ALL_PEOPLE);

  console.log('data', data);
  return (
    <div>
      <SearchForm />
      {/* {data?.getAllPeople.results.map((val) => { 
        return <h1> {val.name}</h1>;
      })}
     */}
      <PeoplePagination />
      <NamePagination />
    </div>
  );
}

export default AllPeople;

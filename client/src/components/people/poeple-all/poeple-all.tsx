import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../../graphql/graphql-queries/graphql-queries';
import Header from '../../header/Header';
import PeoplePagination from '../../pages/pages-id/pages-id';
import { Query } from '../../../graphql/graphql-interfaces/Query';
import { Link, useParams, useLocation } from 'react-router-dom';
// import IRoute from '../../../config/routes-interfaces/routes';

const AllPeople: React.FC = (props) => {
  const { error, loading, data } = useQuery<Query>(GET_ALL_PEOPLE);

  let location = useLocation();
  console.log(location);
  return (
    <div>
      <Header />
      {data?.getAllPeople.results.map((val) => {
        // return <h1> {val.name}</h1>;
      })}
      {/* <Link to={IRoute.people}> */}
      <PeoplePagination />
    </div>
  );
};

export default AllPeople;

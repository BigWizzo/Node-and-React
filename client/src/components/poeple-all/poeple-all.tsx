import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../graphql/graphql-queries/graphql-queries';
// import PeoplePagination from '../../pages/pages-id/pages-id';
import { Query } from '../../graphql/graphql-interfaces/Query';
import { Link, useParams, useLocation } from 'react-router-dom';
// import IRoute from '../../../config/routes-interfaces/routes';

const AllPeople: React.FC = (props) => {
  const { error, loading, data } = useQuery<Query>(GET_ALL_PEOPLE);

  return (
    <div>
      {data?.getAllPeople.results.map((val) => {
        return <h1> {val.name}</h1>;
      })}
      {console.log(data)}
      <Link to="/page/2">Next</Link>
    </div>
  );
};

export default AllPeople;

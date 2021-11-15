import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../graphql/graphql-queries/graphql-queries';
import { Query } from '../../graphql/graphql-interfaces/Query';
import { Link } from 'react-router-dom';
import AllPeopleItem from '../people-item/people-item';

const AllPeople: React.FC = (props) => {
  const { error, loading, data } = useQuery<Query>(GET_ALL_PEOPLE);

  console.log(data);

  return (
    <div>
      {data?.getAllPeople.results.map((person) => (
        <div key={person.name}>
          <AllPeopleItem person={person} />
        </div>
      ))}
      <Link to="people/?page=2">Next</Link>
    </div>
  );
};

export default AllPeople;

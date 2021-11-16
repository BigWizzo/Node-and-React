import React, { FormEvent, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_PEOPLE_BY_NAME } from '../../graphql/graphql-queries/graphql-queries';
import { NavLink } from 'react-router-dom';
import {
  GetPeopleByName,
  GetPeopleByNameVariables,
} from '../../graphql/graphql-interfaces/GetPeopleByName';

const PeopleByName: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');

  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const name = search.get('name');

  let personName: string = name as string;

  const [getPeopleByName, { data, loading, error }] = useLazyQuery<
    GetPeopleByName,
    GetPeopleByNameVariables
  >(GET_PEOPLE_BY_NAME, {
    variables: { name: searchName },
  });

  if (data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Search Name</h1>
      <input
        type="text"
        onChange={(event) => {
          setSearchName(event.target.value);
        }}
      />
      <button onClick={() => getPeopleByName()}>Submit</button>
    </div>
  );
};

export default PeopleByName;

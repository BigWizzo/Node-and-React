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
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const name = search.get('name');

  let personName: string = name as string;

  const { data, error } = useQuery<GetPeopleByName, GetPeopleByNameVariables>(
    GET_PEOPLE_BY_NAME,
    {
      variables: { name: personName },
    }
  );

  if (data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Search Name</h1>
    </div>
  );
};

export default PeopleByName;

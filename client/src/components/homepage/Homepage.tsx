import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_NAME } from '../../graphql/graphql-queries/graphql-queries';
import {
  GetPeopleByName,
  GetPeopleByNameVariables,
} from '../../graphql/graphql-interfaces/GetPeopleByName';
import AllPeople from '../poeple-all/poeple-all';
import PeopleByPage from '../people-bypage/poeple-bypage';
import PeopleByNamePage from '../people-byname-page/poeple-byname-page';

const Homepage: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');

  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const name = search.get('name');
  const id = search.get('id');
  const page = search.get('page');

  const [getPerson, { data, error }] = useLazyQuery<
    GetPeopleByName,
    GetPeopleByNameVariables
  >(GET_PEOPLE_BY_NAME, {
    variables: { name: searchName },
  });

  console.log(data);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setSearchName(event.target.value);
        }}
      />
      <button onClick={() => getPerson()}>Submit</button>
      {!name && !id && !page && searchName === '' && <AllPeople />}
      {!name && !id && page && <PeopleByPage />}
      {name && !id && page && <PeopleByNamePage />}
    </div>
  );
};

export default Homepage;

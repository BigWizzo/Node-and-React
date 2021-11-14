import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_PEOPLE_BY_NAME } from '../../graphql/graphql-queries/graphql-queries';
import { NavLink } from 'react-router-dom';
import {
  GetPeopleByName,
  GetPeopleByNameVariables,
} from '../../graphql/graphql-interfaces/GetPeopleByName';
import AllPeople from '../poeple-all/poeple-all';
import PeopleByPage from '../people-bypage/poeple-bypage';
import PeopleByNamePage from '../people-byname-page/poeple-byname-page';
import PeopleByName from '../people-byname/people-byname';

const Homepage: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');

  const location = useLocation();
  const search = new URLSearchParams(location.search);
  // const name = search.get('name');
  const id = search.get('id');
  const page = search.get('page');

  console.log(searchName, 'search home');
  debugger;

  const [getPeople, { data, error }] = useLazyQuery<
    GetPeopleByName,
    GetPeopleByNameVariables
  >(GET_PEOPLE_BY_NAME, { variables: { name: searchName } });

  console.log(data, 'data from home');
  // console.log(error, 'error from home');

  return (
    <div>
      <h1>Home Page</h1>
      <input
        type="text"
        value={searchName}
        placeholder="Name"
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={() => getPeople}>Add</button>
      {/* {!name && !id && !page && searchName === '' && <AllPeople />} */}
      {/* {!name && !id && page && <PeopleByPage />} */}
      {/* {name && !id && page && <PeopleByNamePage />} */}
    </div>
  );
};

export default Homepage;

import React from 'react';
import { useLocation } from 'react-router-dom';
import AllPeople from '../poeple-all/poeple-all';
import PeopleByNameId from '../people-by-name-id/poeple-by-name-id';

interface Props {}

const Homepage: React.FC = (props: Props) => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const name = search.get('name');
  const id = search.get('id');
  const page = search.get('page');

  console.log(name, id, page);

  return (
    <div>
      <h1>Home Page</h1>
      {!name && !id && !page && <AllPeople />}
      <PeopleByNameId />
    </div>
  );
};

export default Homepage;

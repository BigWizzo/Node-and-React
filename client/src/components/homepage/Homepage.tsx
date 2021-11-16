import React from 'react';
import { useLocation } from 'react-router-dom';
import AllPeople from '../poeple-all/poeple-all';
import PeopleByPage from '../people-bypage/poeple-bypage';
import PeopleByNamePage from '../people-byname-page/poeple-byname-page';

const Homepage: React.FC = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const name = search.get('name');
  const id = search.get('id');
  const page = search.get('page');

  return (
    <>
      {!name && !id && !page && <AllPeople />}
      {!name && !id && page && <PeopleByPage />}
      {name && !id && page && <PeopleByNamePage />}
    </>
  );
};

export default Homepage;

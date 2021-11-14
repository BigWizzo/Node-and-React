import React from 'react';
import { useLocation } from 'react-router-dom';
import AllPeople from '../poeple-all/poeple-all';
import PeopleByNameId from '../people-byname-page/poeple-byname-page';
import PeopleByPage from '../people-bypage/poeple-bypage';
import PeopleByNamePage from '../people-byname-page/poeple-byname-page';

interface Props {}

const Homepage: React.FC = (props: Props) => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const name = search.get('name');
  const id = search.get('id');
  const page = search.get('page');

  console.log(page, 'from home');

  return (
    <div>
      <h1>Home Page</h1>
      {!name && !id && !page && <AllPeople />}
      {name && id && !page && <PeopleByNameId />}
      {!name && !id && page && <PeopleByPage />}
      {<PeopleByNamePage />}
    </div>
  );
};

export default Homepage;

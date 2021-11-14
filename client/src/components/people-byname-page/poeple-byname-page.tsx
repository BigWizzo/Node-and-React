import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_NAME_PAGE } from '../../graphql/graphql-queries/graphql-queries';
import {
  GetPeopleByNamePage,
  GetPeopleByNamePageVariables,
} from '../../graphql/graphql-interfaces/GetPeopleByNamePage';
import { next, previous } from '../../utils/utils';

const PeopleByNamePage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const name = search.get('name');
  const page = search.get('page');

  if (page === '1' && name === '') {
    history.push('/');
  }
  let personName: string = name as string;
  let pageId: string = page as string;

  const [getPeople, { data, error, loading }] = useLazyQuery<
    GetPeopleByNamePage,
    GetPeopleByNamePageVariables
  >(GET_PEOPLE_BY_NAME_PAGE, {
    variables: { name: personName, page: parseInt(pageId) },
  });

  useEffect(() => {
    getPeople();
  }, []);

  console.log(name, 'personName');
  console.log(pageId, 'pageId');

  console.log(data);

  return (
    <div>
      <button onClick={() => getPeople()}>Name People</button>
      <Link to={`/?name=${name}&page=${previous(pageId)}`}>Previous</Link>
      <Link to={`/?name=${name}&page=${next(pageId)}`}>Next</Link>
    </div>
  );
};

export default PeopleByNamePage;

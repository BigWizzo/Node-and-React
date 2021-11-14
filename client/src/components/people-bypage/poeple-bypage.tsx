import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_PAGE } from '../../graphql/graphql-queries/graphql-queries';
import {
  GetAllPeoplePage,
  GetAllPeoplePageVariables,
} from '../../graphql/graphql-interfaces/GetAllPeoplePage';
import { next, previous } from '../../utils/utils';

const PeopleByPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const page = search.get('page');

  if (page === '1') {
    history.push('/');
  }

  let pageId: string = page as string;

  const [getPeople, { data, error, loading }] = useLazyQuery<
    GetAllPeoplePage,
    GetAllPeoplePageVariables
  >(GET_PEOPLE_BY_PAGE, { variables: { page: parseInt(pageId) } });

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <div>Page Page</div>
      <Link to={`/?page=${previous(pageId)}`}>Previous</Link>
      <Link to={`/?page=${next(pageId)}`}>Next</Link>
    </div>
  );
};

export default PeopleByPage;

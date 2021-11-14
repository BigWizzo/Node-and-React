import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
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

  const { data, error, loading } = useQuery<
    GetPeopleByNamePage,
    GetPeopleByNamePageVariables
  >(GET_PEOPLE_BY_NAME_PAGE, {
    variables: { name: personName, page: parseInt(pageId) },
  });

  console.log(name, 'personName');
  console.log(pageId, 'pageId');

  console.log(data);

  return (
    <div>
      <Link to={`/people/?name=${name}&page=${previous(pageId)}`}>
        Previous
      </Link>
      <Link to={`/people/?name=${name}&page=${next(pageId)}`}>Next</Link>
    </div>
  );
};

export default PeopleByNamePage;

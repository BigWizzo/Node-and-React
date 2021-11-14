import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_PAGE } from '../../graphql/graphql-queries/graphql-queries';
import {
  GetAllPeoplePage,
  GetAllPeoplePageVariables,
} from '../../graphql/graphql-interfaces/GetAllPeoplePage';
import { pageId } from '../../interfaces/interfaces';

const ByPageId: React.FC<{}> = () => {
  const page = useParams<pageId>();

  const [getPeople, { data, error, loading }] = useLazyQuery<
    GetAllPeoplePage,
    GetAllPeoplePageVariables
  >(GET_PEOPLE_BY_PAGE, { variables: { page: parseInt(page.pageId) } });

  useEffect(() => {
    getPeople();
  }, []);

  const previous: number = parseInt(page.pageId) - 1;
  const next: number = parseInt(page.pageId) + 1;

  console.log(data);

  return (
    <div>
      <div>Page Page</div>
      <Link to={`/page/${previous}`}>Previous</Link>
      <Link to={`/page/${next}`}>Next</Link>
    </div>
  );
};

export default ByPageId;

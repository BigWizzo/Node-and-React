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
  const personId = useParams<pageId>();

  const [getPeople, { data, error, loading }] = useLazyQuery<
    GetAllPeoplePage,
    GetAllPeoplePageVariables
  >(GET_PEOPLE_BY_PAGE, { variables: { id: parseInt(personId.pageId) } });

  useEffect(() => {
    getPeople();
  }, []);

  console.log(data);

  return (
    <div>
      <div>Page Page</div>
    </div>
  );
};

export default ByPageId;

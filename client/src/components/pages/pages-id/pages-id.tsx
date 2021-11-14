import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_PAGE } from '../../../graphql/graphql-queries/graphql-queries';
import {
  GetAllPeoplePage,
  GetAllPeoplePageVariables,
} from '../../../graphql/graphql-interfaces/GetAllPeoplePage';

const Pagination: React.FC<{}> = (props: any) => {
  const [getPeople, { data, error, loading }] = useLazyQuery<
    GetAllPeoplePage,
    GetAllPeoplePageVariables
  >(GET_PEOPLE_BY_PAGE, { variables: { id: 3 } });

  console.log(props);

  return (
    <div>
      <button onClick={() => getPeople()}>Get People</button>
    </div>
  );
};

export default Pagination;

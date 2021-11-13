import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_PAGE } from '../../../graphql/graphql-queries/graphql-queries';

const Pagination = (props: any) => {
  const [getPeople, { data, error, loading }] = useLazyQuery(
    GET_PEOPLE_BY_PAGE,
    { variables: { id: 1 } }
  );

  console.log(data);

  return (
    <div>
      <Link to="?page=ana">Link to Page</Link>
      <button onClick={() => getPeople()}>Get People</button>
    </div>
  );
};

export default Pagination;

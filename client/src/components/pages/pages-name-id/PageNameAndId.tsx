import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_NAME_PAGE } from '../../../graphql/graphql-queries/graphql.queries';

const Pagination = () => {
  // const [page, setPage] = useState('');
  const [getPeople, { data, error, loading }] = useLazyQuery(
    GET_PEOPLE_BY_NAME_PAGE,
    { variables: { name: 'ana', id: 1 } }
  );

  if (error) {
    console.log(error);
  }

  if (loading) {
    console.log('loading');
  }

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <button onClick={() => getPeople()}>Name People</button>
    </div>
  );
};

export default Pagination;

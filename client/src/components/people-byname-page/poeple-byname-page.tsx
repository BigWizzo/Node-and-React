import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_NAME_PAGE } from '../../graphql/graphql-queries/graphql-queries';

const PeopleByNameId = () => {
  // const [page, setPage] = useState('');
  const [getPeople, { data, error, loading }] = useLazyQuery(
    GET_PEOPLE_BY_NAME_PAGE,
    { variables: { name: 'ana', page: 1 } }
  );

  return (
    <div>
      <button onClick={() => getPeople()}>Name People</button>
    </div>
  );
};

export default PeopleByNameId;

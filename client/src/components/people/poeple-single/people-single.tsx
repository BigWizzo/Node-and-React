import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PERSON_BY_ID } from '../../../graphql/graphql-queries/graphql.queries';

const SinglePerson = () => {
  // const [search, setSearch] = useState('');
  const { personId } = useParams() as any;
  const { loading, error, data } = useQuery(GET_PERSON_BY_ID, {
    variables: { id: parseInt(personId) },
  });

  // if (error) {
  // console.log(error);
  // }
  //
  if (data) {
    console.log(data);
  }
  return (
    <div>
      <h1>Single Person</h1>
    </div>
  );
};

export default SinglePerson;

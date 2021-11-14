import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_NAME } from '../../graphql/graphql-queries/graphql-queries';
import { NavLink } from 'react-router-dom';

const Form = () => {
  const [search, setSearch] = useState('');
  const [getPerson, { data, error }] = useLazyQuery(GET_PEOPLE_BY_NAME, {
    variables: { name: search },
  });

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button onClick={() => getPerson()}>Submit</button>
    </div>
  );
};

export default Form;

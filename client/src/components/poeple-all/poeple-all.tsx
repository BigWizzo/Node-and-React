import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../graphql/graphql-queries/graphql-queries';
import { Query } from '../../graphql/graphql-interfaces/Query';
import { Link } from 'react-router-dom';
import PeopleItem from '../people-item/people-item';
import { Container, Grid } from '@mui/material';

const AllPeople: React.FC = (props) => {
  const { error, loading, data } = useQuery<Query>(GET_ALL_PEOPLE);

  console.log(data);

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {data?.getAllPeople.results.map((person) => (
          <PeopleItem person={person} key={person.name} />
        ))}
      </Grid>
      <Link to="people/?page=2">Next</Link>
    </Container>
  );
};

export default AllPeople;

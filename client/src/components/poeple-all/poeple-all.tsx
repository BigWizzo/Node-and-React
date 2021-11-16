import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../../graphql/graphql-queries/graphql-queries';
import { Query } from '../../graphql/graphql-interfaces/Query';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Box, ButtonGroup, Button } from '@mui/material';
import PeopleItem from '../people-item/people-item';
import { GridDisplayFlexEnd, PageHeading } from '../../styles/people-styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const AllPeople: React.FC = () => {
  const history = useHistory();
  const { error, loading, data } = useQuery<Query>(GET_ALL_PEOPLE);

  console.log(data?.getAllPeople);

  return (
    <Container maxWidth="md">
      <Box sx={{ margin: '30px' }}>
        <GridDisplayFlexEnd>
          <Button
            variant="outlined"
            startIcon={<PersonSearchIcon />}
            onClick={() => history.push('/search')}
          >
            Search People
          </Button>
        </GridDisplayFlexEnd>
      </Box>
      <PageHeading variant="h4">Home Page</PageHeading>
      {data && (
        <Grid container spacing={2}>
          {data?.getAllPeople.results.map((person) => (
            <PeopleItem person={person} key={person.name} />
          ))}
        </Grid>
      )}
      {loading && <PageHeading variant="h4">Loading...</PageHeading>}
      {error && <PageHeading variant="h6">Error :(</PageHeading>}
      {data && (
        <Box sx={{ margin: '20px auto' }}>
          <ButtonGroup variant="outlined" size="large" fullWidth>
            <Button disabled startIcon={<ArrowBackIosIcon />}>
              Previous
            </Button>
            <Button
              endIcon={<ArrowForwardIosIcon />}
              onClick={() => history.push(`people/?page=2`)}
            >
              Next
            </Button>
          </ButtonGroup>
        </Box>
      )}
    </Container>
  );
};

export default AllPeople;

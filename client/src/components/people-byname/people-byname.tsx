import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_PEOPLE_BY_NAME } from '../../graphql/graphql-queries/graphql-queries';
import {
  GetPeopleByName,
  GetPeopleByNameVariables,
} from '../../graphql/graphql-interfaces/GetPeopleByName';
import PeopleItem from '../people-item/people-item';
import { PageHeading, StyledInput, FormBox } from '../../styles/people-styles';
import { Box, ButtonGroup, Container, Grid, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TopButtons from '../shared/top-buttons';

const PeopleByName: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');

  const history = useHistory();

  const [getPeopleByName, { data, loading, error }] = useLazyQuery<
    GetPeopleByName,
    GetPeopleByNameVariables
  >(GET_PEOPLE_BY_NAME, {
    variables: { name: searchName },
  });

  const people = data?.getPeopleByName.results;

  return (
    <Container maxWidth="md">
      <TopButtons />
      <PageHeading variant="h4">Search People</PageHeading>
      <FormBox>
        <StyledInput
          type="text"
          onChange={(event) => {
            setSearchName(event.target.value);
          }}
        />
        <Button onClick={() => getPeopleByName()} variant="contained" fullWidth>
          Submit
        </Button>
      </FormBox>
      {data && (
        <Grid container spacing={2}>
          {people?.map((person) => (
            <PeopleItem person={person} key={person.name} />
          ))}
        </Grid>
      )}
      {loading && <PageHeading variant="h4">Loading...</PageHeading>}
      {error && <PageHeading variant="h6">Error :(</PageHeading>}
      {error && (
        <Box sx={{ maxWidth: 400, margin: 'auto' }}>
          <PageHeading variant="h6" align="center">
            No people found. Please return to the home page or use the search
            button to find the person you're looking for
          </PageHeading>
        </Box>
      )}
      {people?.length && (
        <Box sx={{ margin: '20px auto' }}>
          <ButtonGroup variant="outlined" size="large" fullWidth>
            <Button disabled>Previous</Button>
            {data?.getPeopleByName?.next && (
              <Button
                endIcon={<ArrowForwardIosIcon />}
                onClick={() =>
                  history.push(`/people/?name=${searchName}&page=2`)
                }
              >
                Next
              </Button>
            )}
          </ButtonGroup>
        </Box>
      )}
    </Container>
  );
};

export default PeopleByName;

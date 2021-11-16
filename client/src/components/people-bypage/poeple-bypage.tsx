import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PEOPLE_BY_PAGE } from '../../graphql/graphql-queries/graphql-queries';
import {
  GetAllPeoplePage,
  GetAllPeoplePageVariables,
} from '../../graphql/graphql-interfaces/GetAllPeoplePage';
import { next, previous } from '../../utils/utils';
import PeopleItem from '../people-item/people-item';
import { PageHeading } from '../../styles/people-styles';
import { Box, ButtonGroup, Container, Grid, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TopButtons from '../shared/top-buttons';

const PeopleByPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const page = search.get('page');

  let pageId: string = page as string;

  if (parseInt(pageId) < 1) {
    history.push('/');
  }

  const { data, error, loading } = useQuery<
    GetAllPeoplePage,
    GetAllPeoplePageVariables
  >(GET_PEOPLE_BY_PAGE, { variables: { page: parseInt(pageId) } });

  const people = data?.getAllPeoplePage?.results;

  return (
    <Container maxWidth="md">
      <TopButtons />
      <PageHeading variant="h4">List by Page</PageHeading>
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
            Person not found. Please use the search button to find the person
            you're looking for
          </PageHeading>
        </Box>
      )}
      {people?.length && (
        <Box sx={{ margin: '20px auto' }}>
          <ButtonGroup variant="outlined" size="large" fullWidth>
            <Button
              startIcon={<ArrowBackIosIcon />}
              onClick={() => history.push(`/people/?page=${previous(pageId)}`)}
            >
              Previous
            </Button>
            {data?.getAllPeoplePage?.next && (
              <Button
                endIcon={<ArrowForwardIosIcon />}
                onClick={() => history.push(`/people/?page=${next(pageId)}`)}
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

export default PeopleByPage;

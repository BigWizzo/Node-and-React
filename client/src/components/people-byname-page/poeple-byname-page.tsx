import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PEOPLE_BY_NAME_PAGE } from '../../graphql/graphql-queries/graphql-queries';
import {
  GetPeopleByNamePage,
  GetPeopleByNamePageVariables,
} from '../../graphql/graphql-interfaces/GetPeopleByNamePage';
import { next, previous } from '../../utils/utils';
import PeopleItem from '../people-item/people-item';
import { PageHeading } from '../../styles/people-styles';
import { Box, ButtonGroup, Container, Grid, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TopButtons from '../shared/top-buttons';

const PeopleByNamePage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const name = search.get('name');
  const page = search.get('page');

  let personName: string = name as string;
  let pageId: string = page as string;

  if (parseInt(pageId) < 2 && name === '') {
    history.push('/');
  }

  const { data, error, loading } = useQuery<
    GetPeopleByNamePage,
    GetPeopleByNamePageVariables
  >(GET_PEOPLE_BY_NAME_PAGE, {
    variables: { name: personName, page: parseInt(pageId) },
  });

  return (
    <Container maxWidth="md">
      <TopButtons />
      <PageHeading variant="h4">List by Name</PageHeading>
      {data && (
        <Grid container spacing={2}>
          {data?.getPeopleByNamePage?.results.map((person) => (
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
      <Box sx={{ margin: '20px auto' }}>
        <ButtonGroup variant="outlined" size="large" fullWidth>
          {data?.getPeopleByNamePage?.previous && (
            <Button
              startIcon={<ArrowBackIosIcon />}
              onClick={() =>
                history.push(`/people/?name=${name}&page=${previous(pageId)}`)
              }
            >
              Previous
            </Button>
          )}
          {data?.getPeopleByNamePage?.next && (
            <Button
              endIcon={<ArrowForwardIosIcon />}
              onClick={() =>
                history.push(`/people/?name=${name}&page=${next(pageId)}`)
              }
            >
              Next
            </Button>
          )}
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default PeopleByNamePage;

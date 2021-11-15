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

const PeopleByNamePage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const name = search.get('name');
  const page = search.get('page');

  if (page === '1' && name === '') {
    history.push('/');
  }
  let personName: string = name as string;
  let pageId: string = page as string;

  const { data, error, loading } = useQuery<
    GetPeopleByNamePage,
    GetPeopleByNamePageVariables
  >(GET_PEOPLE_BY_NAME_PAGE, {
    variables: { name: personName, page: parseInt(pageId) },
  });

  console.log(name, 'personName');
  console.log(pageId, 'pageId');

  console.log(loading, 'loading');

  return (
    <Container maxWidth="md">
      <PageHeading variant="h4">List by Name Page</PageHeading>
      {loading && <p>Loading...</p>}
      <Grid container spacing={2}>
        {data?.getPeopleByNamePage?.results.map((person) => (
          <PeopleItem person={person} key={person.name} />
        ))}
      </Grid>
      <Box sx={{ margin: '20px auto' }}>
        <ButtonGroup variant="outlined" size="large" fullWidth>
          <Button
            startIcon={<ArrowBackIosIcon />}
            onClick={() =>
              history.push(`/people/?name=${name}&page=${previous(pageId)}`)
            }
          >
            Previous
          </Button>
          <Button
            endIcon={<ArrowForwardIosIcon />}
            onClick={() =>
              history.push(`/people/?name=${name}&page=${next(pageId)}`)
            }
          >
            Next
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default PeopleByNamePage;

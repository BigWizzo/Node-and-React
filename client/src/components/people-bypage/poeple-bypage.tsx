import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PEOPLE_BY_PAGE } from '../../graphql/graphql-queries/graphql-queries';
import {
  GetAllPeoplePage,
  GetAllPeoplePageVariables,
} from '../../graphql/graphql-interfaces/GetAllPeoplePage';
import { next, previous } from '../../utils/utils';
import { FlexSpaceBetween } from '../../styles/people-styles';
import { Box, ButtonGroup, Card, Grid, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const PeopleByPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const page = search.get('page');

  if (page === '1') {
    history.push('/');
  }

  let pageId: string = page as string;

  const { data, error, loading } = useQuery<
    GetAllPeoplePage,
    GetAllPeoplePageVariables
  >(GET_PEOPLE_BY_PAGE, { variables: { page: parseInt(pageId) } });

  console.log(data);

  return (
    <div>
      <div>Page Page</div>
      <Box sx={{ margin: '20px auto' }}>
        <ButtonGroup variant="outlined" size="large" fullWidth>
          <Button
            startIcon={<ArrowBackIosIcon />}
            onClick={() => history.push(`/people/?page=${previous(pageId)}`)}
          >
            Previous
          </Button>
          <Button
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => history.push(`/people/?page=${next(pageId)}`)}
          >
            Next
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default PeopleByPage;

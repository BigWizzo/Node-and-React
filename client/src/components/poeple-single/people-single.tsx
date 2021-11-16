import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PERSON_BY_ID } from '../../graphql/graphql-queries/graphql-queries';
import { Card, Grid, CardMedia, Typography, Box, Button } from '@mui/material';
import {
  GridDisplayFlex,
  PersonDetails,
  PersonContent,
  ColumnContent,
  PageHeading,
  GridDisplayFlexStart,
} from '../../styles/people-styles';
import image from '../../images/img7.jpg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SinglePerson = () => {
  const history = useHistory();
  const { personId } = useParams() as any;
  const { loading, error, data } = useQuery(GET_PERSON_BY_ID, {
    variables: { id: parseInt(personId) },
  });

  const person = data?.getPersonById;

  return (
    <Box sx={{ margin: '65px auto' }}>
      <GridDisplayFlexStart>
        <Box sx={{ margin: '0 30px' }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => history.goBack()}
          >
            Go Back
          </Button>
        </Box>
      </GridDisplayFlexStart>
      {data && <PageHeading variant="h4">{person?.name}</PageHeading>}
      <PersonDetails>
        <>
          {loading && <PageHeading variant="h4">Loading...</PageHeading>}
          {data && (
            <Card>
              <GridDisplayFlex container>
                <PersonContent item xs={12} sm={6}>
                  <ColumnContent>
                    <Typography variant="h5" color="#03035f" component="div">
                      {person?.name}
                    </Typography>
                    <Typography variant="body2">
                      Gender: {person?.gender}
                    </Typography>
                    <Typography variant="body2">
                      mass: {person?.mass}
                    </Typography>
                    <Typography variant="body2">
                      height: {person?.height}
                    </Typography>
                    <Typography variant="body2">
                      HomeWorld: {person?.homeworld?.name}
                    </Typography>
                  </ColumnContent>
                </PersonContent>
                <Grid item xs={12} sm={6}>
                  <CardMedia
                    component="img"
                    alt="single person"
                    image={image}
                  />
                </Grid>
              </GridDisplayFlex>
            </Card>
          )}
        </>
      </PersonDetails>
      {error && <PageHeading variant="h6">Error :(</PageHeading>}
    </Box>
  );
};

export default SinglePerson;

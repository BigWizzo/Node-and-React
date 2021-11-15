import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PERSON_BY_ID } from '../../graphql/graphql-queries/graphql-queries';
import { Card, Grid, CardContent, CardMedia, Typography } from '@mui/material';
import {
  GridDisplayFlex,
  PersonDetails,
  PersonContent,
  ColumnContent,
} from '../../styles/people-styles';
import image from '../../images/img7.jpg';

const SinglePerson = () => {
  // const [search, setSearch] = useState('');
  const { personId } = useParams() as any;
  const { loading, error, data } = useQuery(GET_PERSON_BY_ID, {
    variables: { id: parseInt(personId) },
  });

  console.log(personId);

  const person = data?.getPersonById;

  if (data) {
    console.log(person);
  }
  return (
    <div>
      <h1>Single Person</h1>
      <PersonDetails>
        <Card>
          <GridDisplayFlex container>
            <PersonContent item xs={12} sm={6}>
              <ColumnContent>
                <Typography variant="h5" color="#00ff00" component="div">
                  {person?.name}
                </Typography>
                <Typography variant="body2">
                  Gender: {person?.gender}
                </Typography>
                <Typography variant="body2">mass: {person?.mass}</Typography>
                <Typography variant="body2">
                  height: {person?.height}
                </Typography>
                <Typography variant="body2">
                  HomeWorld: {person?.homeworld?.name}
                </Typography>
              </ColumnContent>
            </PersonContent>
            <Grid item xs={12} sm={6}>
              <CardMedia component="img" alt="single person" image={image} />
            </Grid>
          </GridDisplayFlex>
        </Card>
      </PersonDetails>
    </div>
  );
};

export default SinglePerson;

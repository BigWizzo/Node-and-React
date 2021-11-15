import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CustomRouterLink } from '../../styles/people-styles';
import { Grid } from '@mui/material';

interface Person {
  name: string;
  gender: string;
  mass: string;
  height: string;
  url: string;
  homeworld: {
    name: string;
  };
}

const PeopleAllItem: React.FC<{ person: Person }> = ({
  person,
}: {
  person: Person;
}) => {
  const urlId = person.url.substr(person.url.length - 2);

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <CustomRouterLink to={`/people/${urlId}`}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" color="#00ff00" component="div">
              {person?.name}
            </Typography>
            <Typography variant="body2">Gender: {person?.gender}</Typography>
            <Typography variant="body2">mass: {person?.mass}</Typography>
            <Typography variant="body2">height: {person?.height}</Typography>
            <Typography variant="body2">
              HomeWorld: {person?.homeworld?.name}
            </Typography>
          </CardContent>
        </Card>
      </CustomRouterLink>
    </Grid>
  );
};

export default PeopleAllItem;

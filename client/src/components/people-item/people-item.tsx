import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
  const url = person.url.substr(22);

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <CustomRouterLink to={`/${url}`}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" color="#03035f" component="div">
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

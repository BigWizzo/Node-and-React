import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

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
  return (
    <div>
      <div>
        <div>{person?.name}</div>
        <div>{person?.gender}</div>
        <div>{person?.mass}</div>
        <div>{person?.height}</div>
        <div>{person?.homeworld?.name}</div>
      </div>
      <Box>
        {/* <Link to="/"> */}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              {person?.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">Gender: {person?.gender}</Typography>
            <Typography variant="body2">mass: {person?.mass}</Typography>
            <Typography variant="body2">height: {person?.height}</Typography>
            <Typography variant="body2">
              HomeWorld: {person?.homeworld?.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        {/* </Link> */}
      </Box>
    </div>
  );
};

export default PeopleAllItem;

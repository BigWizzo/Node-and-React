import React from 'react';
import { useHistory } from 'react-router-dom';
import { FlexSpaceBetween } from '../../styles/people-styles';
import { Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const TopButtons = () => {
  const history = useHistory();
  return (
    <Box sx={{ margin: '30px' }}>
      <FlexSpaceBetween>
        <Button
          variant="outlined"
          startIcon={<HomeIcon />}
          onClick={() => history.push('/people')}
        >
          Go Home
        </Button>
        <Button
          variant="outlined"
          startIcon={<PersonSearchIcon />}
          onClick={() => history.push('/search')}
        >
          Search People
        </Button>
      </FlexSpaceBetween>
    </Box>
  );
};

export default TopButtons;

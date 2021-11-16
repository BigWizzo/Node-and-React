import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CardContent, Grid, Typography, Box } from '@mui/material';

export const PageHeading = styled(Typography)`
  text-align: center;
  margin: 20px auto;
`;

export const GridDisplayFlex = styled(Grid)`
  display: flex;
`;

export const GridDisplayFlexEnd = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

export const GridDisplayFlexStart = styled(Grid)`
  display: flex;
  justify-content: flex-start;
`;

export const FlexSpaceBetween = styled(Grid)`
  display: flex;
  justify-content: space-between;
`;

export const CustomRouterLink = styled(Link)`
  text-decoration: none;
`;

export const PersonDetails = styled(Grid)`
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  margin: 30px;
`;

export const ColumnContent = styled(CardContent)`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
`;

export const PersonContent = styled(Grid)`
  display: flex;
  justify-content: center;
  max-height: 75vh;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FormBox = styled(Box)`
max-width: 400px;
margin: 0 auto 20px;
background: #6f64dd33;
padding: 20px;
border-radius: 5px;
}
`;

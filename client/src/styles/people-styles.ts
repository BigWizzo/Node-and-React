import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

export const MainColor = styled(Grid)`
  color: #222130;
`;

export const GridDisplayFlex = styled(Grid)`
  display: flex;
`;

export const GridDisplayFlexEnd = styled(Grid)`
  display: flex;
  justify-content: flex-end;
`;

export const GriDRowAlignCenter = styled(Grid)`
  display: flex;
  align-items: center;
`;

export const GridDisplayFlexCenter = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridColumn = styled(Grid)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Column = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

export const FlexSpaceBetween = styled(Grid)`
  display: flex;
  justify-content: space-between;
`;

export const ColumnFlexEnd = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
`;

export const CustomRouterLink = styled(Link)`
  text-decoration: none;
`;

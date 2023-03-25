import * as React from 'react';
import { AppBar } from '@mui/material';
import { styled } from '@mui/joy';

const StyledNavBar = styled(AppBar)({
  background: 'linear-gradient(268.62deg, #58FFFF 0%, #007888 100%)',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 180,
  padding: '0 30px',
});

export default function NavBar(props: any) {
  return <StyledNavBar>{props.children}</StyledNavBar>;
}

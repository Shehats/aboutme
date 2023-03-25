import * as React from 'react';
import { Box } from "@mui/joy";
import { styled } from "@mui/joy";
import profile from '../resources/profile.jpg';
import { Card } from '@mui/material';

const StyledBox = styled(Card)({
  background: 'linear- gradient(209.47deg, #007888 0 %, rgba(88, 255, 255, 0) 100 %)',
  border: 0,
  borderRadius: 20,
  boxShadow: '0 3px 5px 2px #007888',
  color: 'white',
  height: 300,
  padding: '0 3px',
});

export default function PictureBox() {
  return (
    <StyledBox>
      <img src={profile} height={300} width={300} />
    </StyledBox>
  )
}

import * as React from 'react';
import { styled } from '@mui/joy';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { YouTube, LinkedIn, GitHub } from '@mui/icons-material';
import Footer from '../blog/Footer';

const StyledFooter = styled(Box)({
  background: '#484848',
  border: 0,
  color: 'white',
  height: 180,
  padding: '0 30px',
});

export default function AppFooter() {
  return (
    <StyledFooter>
      <Grid container paddingTop={2} component='footer'>
        <Grid item><Typography variant='h3'>Links</Typography> </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Link href='https://www.linkedin.com/in/salehshehata/'><LinkedIn /></Link>
        </Grid>
        <Grid item><YouTube /></Grid>
        <Grid item>
          <Link href='https://github.com/Shehats'><GitHub /></Link>
        </Grid>
      </Grid>
      <Grid container>
        <Box sx={{ paddingLeft: '40%' }}>
          <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              Sal
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              component="p"
            >
              An Enthusiastic Software Engineer
            </Typography>
          </Container>
        </Box>
      </Grid>
    </StyledFooter>
  );
}
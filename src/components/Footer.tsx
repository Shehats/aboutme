import * as React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { YouTube, LinkedIn, GitHub } from '@mui/icons-material';

export default function AppFooter() {
  return (
    <Box sx={
      {
        background: '#24292e',
        border: 0,
        color: 'white',
        height: 180,
        padding: '0 30px',
      }
    }>
      <Grid container>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Saleh Shehata
          </Typography>
          <Typography
            variant="caption"
            align="center"
            component="p"
          >
            An Enthusiastic Software Engineer
          </Typography>
          <Typography align="center">
            <Link href='https://www.linkedin.com/in/salehshehata/'><LinkedIn /></Link>
            <Link href='https://github.com/Shehats'><GitHub /></Link>
          </Typography>
        </Container>
      </Grid>
    </Box>
  );
}
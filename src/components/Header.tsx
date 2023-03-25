import * as React from 'react';
import { Toolbar, Typography } from "@mui/material";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <NavBar>
      <Toolbar sx={{ marginBottom: "60px" }}>
        <Typography
          variant="h1"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: "Freestyle Script" }}
          height="10%"
          width={window.innerWidth}
          align="center"
          marginTop={3}
        >
          Saleh Shehata
        </Typography>
      </Toolbar>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          marginRight={65}
        >
          About me
        </Typography>
        <Typography
          variant='h6'
          component='div'
          marginRight={65}
        >
          Experience
        </Typography>
        <Typography
          variant='h6'
          component='div'
        >
          Blogs
        </Typography>
      </Toolbar>
    </NavBar>

  );
}

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { PostMeta, Social } from '../models';

interface SidebarProps {
  archives: ReadonlyArray<PostMeta>;
  social: ReadonlyArray<Social>;
}

export default function Sidebar(props: SidebarProps) {
  const { archives, social } = props;
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }} color="secondary">
        Links
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

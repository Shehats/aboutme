
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import { Post } from '../models';

interface MainProps {
  post: Post;
}

export default function Main(props: MainProps) {
  const { post } = props;
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {post.metaData.title}
      </Typography>
      <Divider />
        <Markdown className="markdown">
          {post.content}
        </Markdown>
    </Grid>
  );
}

import ReactMarkdown from 'react-markdown';
import React, { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import rehypeRaw from 'rehype-raw'
import { H1 } from './Text';

function MarkdownListItem(props: any) {
  return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}

const parseImages = (content: string) => {
  const components = [];
  const tags = content.split('/>');
  const key = 'chlid';
  for (let i = 0; i < tags.length; i++) {
    let currentKey = `${key}-${i}`;
    if (tags[i].startsWith('<img') || tags[i].startsWith(' <img')) {
      const imageTag = tags[i] + '/>';
      components.push(<span key={currentKey} dangerouslySetInnerHTML={{__html: imageTag}} />)
    } else {
      components.push(
      <ReactMarkdown key={currentKey} components={{ h1: H1 }} children={tags[i]}/>);
    }
  }
  return <div style={{display:'inline', content: ''}}> { components } </div>;
}

const parseMarkDown = (content: string) => {
  const key = 'parent';
  const lines = content.split("\n");
  const components = [];
  for (let i = 0; i < lines.length; i++) {
    components.push(
    <Fragment key={key + '-' + i}>
      { parseImages(lines[i]) }
    </Fragment>);
  }
  return components
}

export default function Markdown(props: any) {
  return (
    <Fragment>
      { (props.children) ? parseMarkDown(props.children): <div/> }
    </Fragment>
  )
}

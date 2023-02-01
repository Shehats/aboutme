import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Email from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Features } from '../models';
import HeaderBG from './HeaderBG.png';
import { Container } from '@mui/system';

interface Section {
  title: string;
  url: string;
}
interface HeaderProps {
  sections: ReadonlyArray<Section>;
  title: string;
  features?: Features;
}

const isFeatureEnabled = (feature: string, features?: Features) => {
  if (features == null) {
    return false;
  }
  if (features[feature] == null) {
    return false;
  }
  return features[feature];
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  return (
    <React.Fragment>      
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="primary"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {
          ( props.features != null && props.features.email) ?
          <Button variant="outlined" size="small">
            <Email />
            Email me!
          </Button> : <span/>
        }
      </Toolbar>
      <Container>
      <img src={HeaderBG} style={{ width: "100%", margin: "30px 0" }} />
      </Container>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ overflowX: 'auto' }}
      >
        {sections.filter(
          (section: Section) => isFeatureEnabled(section.title, props.features)
        ).map(
          (section: Section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ))}
      </Toolbar>
    </React.Fragment>
  );
}

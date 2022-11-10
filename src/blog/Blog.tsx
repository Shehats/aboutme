import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Config, Post, Social } from '../models';
import { setPageData } from '../effect/setters';
import { getPost } from '../data/posts';

const sections = [
  { title: 'About me', url: '#' },
  { title: 'Blogs', url: '#' },
];

const socialMap: Map<string,any> = new Map();
socialMap.set('Github', GitHubIcon);
socialMap.set('Twitter', TwitterIcon);
socialMap.set('LinkedIn', LinkedInIcon);

const theme = createTheme();

interface BlogProps {
  config: Config;
  configLoaded: boolean;
}
export default function Blog(props: BlogProps) {
  const [aboutMePost, setAboutMePost] = React.useState({} as Post);
  const [social, setSocial] = React.useState(props.config.social);
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    const sanitizeData = async () => {
      await setPageData(getPost, setAboutMePost, props.config.about);
      setSocial(props.config.social.map((s: Social) => ({
        ...s,
        icon: socialMap.has(s.name) ? socialMap.get(s.name) : undefined,
      })));
      setPageLoaded(true);
    };
    sanitizeData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Saleh Shehata" sections={sections} features={props.config.features}/>
        {(props.configLoaded && pageLoaded) ? <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main post={ aboutMePost } />
            <Sidebar
              archives={props.config.allPosts}
              social={social}
            />
          </Grid>
          <Grid container spacing={4}>
            {props.config.featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>: <div/>
        }
      </Container>
      <Footer
        title="Sal"
        description="Human @ Planet Earth"
      />
    </ThemeProvider>
  );
}

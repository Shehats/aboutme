import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import { Typography } from '@mui/material';
import PictureBox from '../components/PictureBox';
import DjangoLogo from '../resources/django-logo.svg'
import GoLogo from '../resources/go-logo.svg'
import TypescriptLogo from '../resources/typescript-logo.svg'
import JavaLogo from '../resources/java-logo.svg'
import PythonLogo from '../resources/python-logo.svg'
import ScalaLogo from '../resources/scala-logo.svg'
import KotlinLogo from '../resources/kotlin-logo.svg'
import NodeJsLogo from '../resources/nodejs-logo.svg'
import JavaScriptLogo from '../resources/js-logo.svg'
import DockerLogo from '../resources/docker-logo.svg'
import SpringLogo from '../resources/spring-logo.svg'
import RedisLogo from '../resources/redis-logo.svg'
import KafkaLogo from '../resources/kafka-logo.svg'
import MongoLogo from '../resources/mongodb-logo.svg'
import MySQLLogo from '../resources/mysql-logo.svg'
import PostgresLogo from '../resources/postgresql-logo.svg'
import TerraformLogo from '../resources/terraform-logo.svg'
import LandingComponent from '../components/Landing';
import AppFooter from '../components/Footer';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#718784',
    },
    secondary: {
      main: '#f50057',
    },
    success: {
      main: '#486949',
    },
  },
});

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
      </Container>
      <Grid container spacing={4} marginTop={20} paddingLeft={4} maxWidth="lg">
        <Grid item><PictureBox /></Grid>
        <Grid item>
          <Typography variant='h4'>Hi, I am Saleh Shehata &#128075;</Typography>
          <Typography paddingBottom={3} />
          <Typography>I like to consider myself an enthusiastic Software Engineer who likes to learn something new every day.</Typography>
          <Typography>I have worked in great corporations over the past 4 years.</Typography>
        </Grid>
        <Grid item />
      </Grid>
      <Grid container spacing={4} marginTop={1} paddingLeft={4} maxWidth="lg">
        <Grid item>
          <Typography variant='h4'>I know these programming languages and frameworks</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} paddingLeft={4} marginTop={3} maxWidth="lg">
        <Grid item><img src={TypescriptLogo} /></Grid>
        <Grid item><img src={JavaLogo} /></Grid>
        <Grid item><img src={GoLogo} /> </Grid>
        <Grid item><img src={PythonLogo} /></Grid>
        <Grid item><img src={JavaScriptLogo} /></Grid>
        <Grid item><img src={ScalaLogo} /></Grid>
        <Grid item><img src={KotlinLogo} /></Grid>
        <Grid item><img src={NodeJsLogo} /></Grid>
        <Grid item><img src={DockerLogo} width="50%" height="70%" /></Grid>
        <Grid item><img src={SpringLogo} /></Grid>
        <Grid item><img src={RedisLogo} /></Grid>
        <Grid item><img src={KafkaLogo} /></Grid>
        <Grid item><img src={MongoLogo} /></Grid>
        <Grid item><img src={MySQLLogo} /></Grid>
        <Grid item><img src={PostgresLogo} /></Grid>
        <Grid item><img src={TerraformLogo} /></Grid>
        <Grid item><img src={DjangoLogo} /></Grid>
      </Grid>
      <LandingComponent />
      <AppFooter />
    </ThemeProvider>
  );
}

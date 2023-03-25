import * as React from 'react';
import { Card, CardContent, Grid, Icon, IconButton, List, ListItem, ListItemIcon, styled } from "@mui/material";
import { Experience } from '../models';
import { CardHeader, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const syleCard = (bgColor: string) => styled(Card)({
  borderRadius: 10,
  backgroundColor: bgColor,
  width: window.innerWidth,
  resize: 'both',
  transform: '-moz-initial',
});

interface ExperienceDivProps {
  bgColor: string;
}

interface ExperienceCardProps {
  bgColor: string;
  experience: Experience;
}

const ExperienceDiv = (props: React.PropsWithChildren<ExperienceDivProps>) => {
  const StyledCard = syleCard(props.bgColor);
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
};

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <ExperienceDiv bgColor={props.bgColor}>
      <CardHeader>
      </CardHeader>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item>
            <Typography variant='h4'>{props.experience.title}</Typography>
          </Grid>
          <Grid item>
            <img src={props.experience.logo} width={props.experience.width} height={props.experience.height} />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item>
            <Typography variant='h6'>
              {props.experience.header}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} paddingTop={3}>
          <List>
            {props.experience.theme.map(th =>
              <ListItem>
                <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
                <Typography variant='body1'>{th}</Typography>
              </ListItem>)
            }
          </List>
        </Grid>
      </CardContent>
    </ExperienceDiv>
  );
}
